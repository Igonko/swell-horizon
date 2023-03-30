import cookie from 'cookie';
import type { NextApiRequest, NextApiResponse } from 'next';
import { getClientWithSessionToken } from 'lib/graphql/client';
import { denullifyArray } from 'lib/utils/denullify';
import { getCartItems } from 'lib/utils/cart';
import type { CartData, CartItemInput } from 'types/shared/cart';
import { sameSiteSettings } from 'utils/editor';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<CartData>,
) {
  if (req.method && !['GET', 'PUT'].includes(req.method)) {
    return res.status(405).end('Method Not Allowed');
  }

  const client = getClientWithSessionToken(req.cookies);

  if (req.method === 'PUT') {
    const cartItemInput = req.body as CartItemInput;

    if (!cartItemInput?.productId || !cartItemInput?.quantity) {
      return res.status(400).end('Bad Request');
    }

    const response = await client.addToCart({ cartItemInput });
    const { addCartItem: cart } = response.data;

    if (!cart) {
      return res.status(403).end('Invalid payload');
    }

    const sessionToken = response.headers.get('X-Session');
    if (sessionToken) {
      res.setHeader(
        'Set-Cookie',
        cookie.serialize('sessionToken', sessionToken, {
          maxAge: 60 * 60 * 24 * 7,
          httpOnly: true,
          path: '/',
          ...sameSiteSettings,
        }),
      );
    }

    const cartItems = denullifyArray(getCartItems(cart));

    return res.status(200).json({
      data: {
        total: cart.grandTotal ?? 0,
        items: cartItems,
        checkoutUrl: cart.checkoutUrl ?? '#',
      },
    });
  } else if (req.method === 'GET') {
    const response = await client.getCart();
    const { cart } = response.data;

    if (!cart) {
      return res.status(403).end('Invalid payload');
    }

    const sessionToken = response.headers.get('X-Session');
    if (sessionToken) {
      res.setHeader(
        'Set-Cookie',
        cookie.serialize('sessionToken', sessionToken, {
          maxAge: 60 * 60 * 24 * 7,
          httpOnly: true,
          path: '/',
          ...sameSiteSettings,
        }),
      );
    }

    const cartItems = denullifyArray(getCartItems(cart));

    return res.status(200).json({
      data: {
        total: cart.grandTotal ?? 0,
        items: cartItems,
        checkoutUrl: cart.checkoutUrl ?? '#',
      },
    });
  }
}
