import React, {useState} from 'react';
import {useRouter} from 'next/router';
import type {GetStaticPaths, GetStaticProps} from 'next';
import useProductSelection from 'hooks/useProductSelection';
import ImageGallery from 'components/molecules/ImageGallery';
import ProductHeader, {
  ProductHeaderProps,
} from 'components/molecules/ProductHeader';
import getGQLClient from 'lib/graphql/client';
import {getProductBySlug} from 'lib/shop/fetchingFunctions';
import type {MandatoryImageProps} from 'types/global';
import type {
  ProductOption,
  PurchasableProductData,
} from 'types/shared/products';
import type {
  SwellProduct,
  SwellProductContentExpandableDetail,
  SwellProductPurchaseOptions,
  SwellProductVariant,
} from 'lib/graphql/generated/sdk';
import type {ProductBenefitProps} from 'components/atoms/ProductBenefit';
import useCurrencySubscription from 'hooks/useCurrencySubscription';
import Head from 'next/head';
import {withMainLayout} from 'lib/utils/fetch_decorators';
import type {ParsedUrlQuery} from 'querystring';
import {useEffect} from 'react';
import TableProducts from 'src/components/Table/TableProducts';
import useCartStore from "../../stores/cart";
import type {CartItemInput} from 'types/shared/cart';

export enum LAYOUT_ALIGNMENT {
  STANDARD = 'standard',
  LEFT_ALIGNED = 'left_aligned',
}

interface ProductSettings {
  calloutTitle: string | null;
  calloutDescription: string | null;
  showStockLevels: boolean;
  layoutOptions: LAYOUT_ALIGNMENT;
  enableProductCounter: boolean;
  lowStockIndicator: number | null;
}

export interface ProductsPageProps {
  slug: string;
  productId: string;
  isGiftCard: boolean;
  currency: string;
  images: MandatoryImageProps[];
  details: ProductHeaderProps;
  productOptions: ProductOption[];
  productBenefits: ProductBenefitProps[];
  expandableDetails: SwellProductContentExpandableDetail[];
  purchaseOptions: SwellProductPurchaseOptions;
  productVariants: SwellProductVariant[];
  upSells: PurchasableProductData[];
  stockLevel: SwellProduct['stockLevel'];
  stockPurchasable: SwellProduct['stockPurchasable'];
  stockTracking: SwellProduct['stockTracking'];
  settings: ProductSettings;
  meta: {
    title: string;
    description: string;
  };
}

export const getStaticPaths: GetStaticPaths = async ({
  locales,
  defaultLocale,
}) => {
  const client = getGQLClient();
  const response = await client.getProductSlugs();
  const {products: productsQueryResults} = response.data;

  const paths: { params: ParsedUrlQuery; locale?: string }[] = [];

  productsQueryResults?.results?.forEach((product) => {
    if (product?.slug) {
      const localesArray = locales?.length ? locales : [defaultLocale];
      localesArray?.forEach((locale) => {
        paths.push({params: {slug: product.slug as string}, locale});
      });
    }
  });

  return {
    paths,
    fallback: 'blocking',
  };
};

const propsCallback: GetStaticProps<ProductsPageProps> = async (context) => {
  if (!context.params?.slug || typeof context.params?.slug !== 'string') {
    return {
      notFound: true,
    };
  }

  const client = getGQLClient();
  const {
    data: {storeSettings},
  } = await client.getStoreSettings();

  const {locale} = context;
  const currency = storeSettings?.store?.currency || undefined;

  const productData = await getProductBySlug(context.params.slug, {
    currency,
    locale,
  });

  return {
    props: {
      ...productData,
      ...(locale ? {locale} : {}),
    },
  };
};

export const getStaticProps = withMainLayout(propsCallback);

const ProductsPage: React.FC<ProductsPageProps> = ({
  slug,
  productId,
  isGiftCard,
  images,
  currency: currencyProp,
  details,
  productOptions: productOptionsProp,
  purchaseOptions: purchaseOptionsProp,
  productVariants: productVariantsProp,
  upSells: upSellsProp,
  stockLevel,
  settings,
  meta,
}) => {
  const {locale} = useRouter();
  const router = useRouter();
  const [, setLiveSettings] = useState(settings);

  const {productOptions, purchaseOptions, productVariants,} =
    useCurrencySubscription({
      defaultData: {
        currency: currencyProp,
        productOptions: productOptionsProp,
        purchaseOptions: purchaseOptionsProp,
        productVariants: productVariantsProp,
        upSells: upSellsProp,
      },
      callback: (newCurrency) =>
        getProductBySlug(slug, {currency: newCurrency, locale}),
      currencyGetter: (data) => data.currency,
    });
  const {cart, showCart, hideCart} = useCartStore()
  const {addToCartProducts} = useProductSelection({
    productId,
    productOptions,
    purchaseOptions,
    productVariants,
    isGiftCard,
    stockLevel,
  });


  const addProductToCart = async (products: CartItemInput[]) => {
    await addToCartProducts(products)
    showCart();
  }
  const [showCheckout, setCheckout] = useState(false)
  const checkOut = async (products: CartItemInput[]) => {
    if (cart && Object.keys(cart).length) {
      if (!cart.items.length) {
        await addToCartProducts(products)
        hideCart()
      }
      setCheckout(true)
    }
  }

  useEffect(() => {
    if (cart && Object.keys(cart)?.length && showCheckout && cart.items?.length) {
      cart.checkoutUrl !== '#' && cart.items.length && router.push(`${cart.checkoutUrl}/shipping`)
      setCheckout(false)
    }

  }, [cart, router, showCheckout])

  // Set up message listeners to update the settings when the user changes them from the editor
  useEffect(() => {
    // Only enable the live updates if the editor variable is set to true
    if (process.env.NEXT_PUBLIC_SWELL_EDITOR !== 'true') return;

    let toCamelCase: (string?: string | undefined) => string | undefined;

    import('lodash.camelcase').then((pkg) => {
      toCamelCase = pkg.default;
    });

    const handler = async (event: MessageEvent) => {
      const {type, details} = event.data;

      if (
        type !== 'content.updated' ||
        details?.model !== 'products' ||
        !details.value
      )
        return;

      const camelCasedSettings = Object.entries(details.value).reduce(
        (acc, [key, value]) => ({
          ...acc,
          [toCamelCase(key) ?? '']: value,
        }),
        {},
      );

      setLiveSettings(camelCasedSettings as ProductSettings);
    };

    window.addEventListener('message', handler);

    return () => {
      window.removeEventListener('message', handler);
    };
  }, []);

  return (
    <div>
      <Head>
        <title>{meta.title} - Horizon</title>
        <meta name="description" content={meta.description}/>
      </Head>
      <div className='w-full max-w-[1140px] mx-auto p-5 overflow-hidden'>
        <article>
          <section className='md:flex gap-3 lg:max-h-[300px] h-full'>
            <div className="relative md:w-[480px] md:h-[300px]">
              <ImageGallery images={images}/>
            </div>
            <div className="relative md:max-w-[620px] md:h-[300px] mt-6 ">
              <ProductHeader {...details} showSubtitle={false}/>
            </div>
          </section>
        </article>
        <div>
          <div className="my-4 relative z-20">
            <TableProducts
              productId={productId}
              currency={currencyProp}
              purchaseOptions={purchaseOptions}
              productOptions={productOptions}
              productVariants={productVariants}
              addToCart={(productOption) => addProductToCart(productOption)}
              checkOut={(productOption) => checkOut(productOption)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
