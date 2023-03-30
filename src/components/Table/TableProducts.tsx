import React, {FC, useEffect, useState} from 'react';
import type {
  SwellProductVariant,
  SwellProductPurchaseOptions
} from 'lib/graphql/generated/sdk';
import Cell from "./Cell";
import Button from 'components/atoms/Button';
import {BUTTON_TYPE} from 'types/shared/button';
import Price from 'components/atoms/Price';
import type {
  ProductOption,
} from 'types/shared/products';
import useI18n from "../../../hooks/useI18n";
import Image from 'components/atoms/SafeImage';
import type {CartItemInput} from "../../../types/shared/cart";

interface TableProductProps {
  productVariants: SwellProductVariant[];
  productOptions: ProductOption[];
  currency?: string;
  showTotalPriceCount?: boolean;
  addToCart?: (productOption: CartItemInput[]) => void;
  checkOut?: (productOption: CartItemInput[]) => void;
  productId: string;
  purchaseOptions?: SwellProductPurchaseOptions
}

interface IBodyTable {
  [key: string]: {
    id: string;
    name: string;
    price?: number;
    image: {
      id: string;
      file: {
        id: string,
        url?: string,
        width: number,
        height: number,
        filename: null
      }
    };
    size: ISize[]
  }
}

interface ISize extends Omit<SwellProductVariant, 'id'> {
  id:number
  productOption: {
    selectedPurchaseOption: string,
    selectedPlan: null,
    quantity: number,
    selectedProductOptions: {
      [key: string]: string
    },
    textProductOptions: { [key: string]: number }
  }
}

const TableProducts: FC<TableProductProps> = ({
    currency,
    productVariants,
    productOptions,
    showTotalPriceCount = true,
    checkOut,
    addToCart,
    productId,
    purchaseOptions
  }): JSX.Element => {
    const i18n = useI18n();
    const addLabel = i18n('products.add_to_cart');
    const checkoutLabel = i18n('cart.checkout_button');

    const [headerTable, setHeaderTable] = useState<ProductOption['values'] | []>([]);
    const [bodyTable, setBodyTable] = useState<IBodyTable | undefined>(undefined)
    const [totalProductPrice, setTotalProductPrice] = useState({
      totalItems: 0,
      totalPrice: 0
    })
    const updateProductPrice = (colorId: string, productCount: string, name: string) => {
      if (colorId && productCount && name && bodyTable && Object.keys(bodyTable)?.length) {
        const {size, ...param} = bodyTable[colorId as string]
        const selectProduct = size?.map((item) => {
          if (item.name === name) {
            return {...item, productOption: {...item.productOption, quantity: +productCount}}
          }
          return item
        })
        const updateProduct = {
          ...bodyTable,
          [colorId]: {...param, size: selectProduct}
        }

        if (updateProduct && Object.keys(updateProduct)?.length) {
          const totalItems: number = Object.entries(updateProduct)
            ?.reduce((acc, item) => {
              return acc + (item[1].size.reduce((count, el) => {
                return count + Number(el.productOption.quantity)
              }, 0))
            }, 0) || 0

          const totalPrice: number = Object.entries(updateProduct)
            ?.reduce((acc, item) => {
              return acc + (item[1].size.reduce((count, el) => {
                return count + (Number(el.price) * Number(el.productOption.quantity))
              }, 0))
            }, 0) || 0

          setTotalProductPrice({
            totalItems,
            totalPrice
          })
        }
        updateProduct && Object.keys(updateProduct)?.length && setBodyTable(updateProduct)
      }
    }

    const prepareGoodsForSend = () => {
      const getProductForSend: CartItemInput[] = []

      if (productId && bodyTable && Object.keys(bodyTable)?.length) {
        Object.entries(bodyTable)?.forEach((item) => {
          item[1].size.forEach((sizeItem) => {
            if (sizeItem.productOption.quantity > 0) {
              getProductForSend.push({
                options: sizeItem.productOption.selectedProductOptions &&
                  Object.keys(sizeItem.productOption.selectedProductOptions)
                    ?.map((item) => ({id: item, valueId: sizeItem.productOption.selectedProductOptions[item]})),
                quantity: sizeItem.productOption.quantity,
                productId: productId,
                purchaseOption: {
                  type: sizeItem.productOption.selectedPurchaseOption
                }
              })
            }
          })
        })
      }
      return getProductForSend
    }

    const addToCartProduct = () => {
      const products: CartItemInput[] = prepareGoodsForSend();
      products?.length && addToCart?.(products)
    }

    const checkOutProduct = async () => {
      const products: CartItemInput[] = prepareGoodsForSend();
      products?.length && checkOut?.(products)
    }

    const createSortOptions = (arr: ProductOption[], searchName: string) => {
      if (arr?.length && searchName) {
        return arr
          ?.filter((item) => (item.name as string).toLowerCase() === `${searchName}`)[0]?.values
          ?.reduce((acc, item) => ({
            ...acc,
            [item.id]: searchName === 'color' ? {...item, size: []} : item.name
          }), {});
      }
    }

    useEffect(() => {
      if (productOptions?.length && purchaseOptions?.standard?.price) {
        const header = productOptions
          ?.filter((item) => (item.name as string).toLowerCase() === 'size')[0]
          ?.values?.map((h) => ({...h, price: h.price + purchaseOptions?.standard?.price}))
        header?.length && setHeaderTable(header);
      }
    }, [productOptions, purchaseOptions])

    useEffect(() => {
      if (productVariants?.length && productOptions?.length) {
        const sizes: Record<string, string> | undefined = createSortOptions(productOptions, 'size');
        const sortProductColor: IBodyTable | undefined = createSortOptions(productOptions, 'color');
        const options: Record<string, Record<string, string>> = {}
        const sortProduct: string[] | undefined = sizes && Object.keys(sizes).map(item => item)


        productOptions?.forEach((item) => {
          if (!options.parentId) {
            options.parentId = {[`${item.name.toLowerCase()}`]: item.id}
          }
          options.parentId = {
            ...options.parentId,
            [`${item.name.toLowerCase()}`]: item.id
          }

          item?.values?.forEach((el) => {
            if (!options[`${item.name.toLowerCase()}`]) {
              options[`${item.name.toLowerCase()}`] = {
                [el.id]: el.name
              }
              return
            }
            options[`${item.name.toLowerCase()}`] = {
              ...options[`${item.name.toLowerCase()}`],
              [el.id]: el.name
            }
          })
        });

        if (options && Object.keys(options)?.length &&
          sortProduct?.length && sortProductColor &&
          Object.keys(sortProductColor)?.length) {

          for (let i = 0; i < productVariants?.length; i++) {
            const searchColor = productVariants[i]?.optionValueIds
              ?.find((item) => options.color[item as string])
            const searchSize = productVariants[i]?.optionValueIds
              ?.find((item) => options.size[item as string])
            const idx = searchSize && sortProduct.indexOf(searchSize)
            if (searchColor && idx !== -1) {
              const el: ISize = {
                ...productVariants[i],
                id: idx as number,
                productOption: {
                  selectedPurchaseOption: "standard",
                  selectedPlan: null,
                  quantity: 0,
                  selectedProductOptions: {
                    [options.parentId['color']]: searchColor as string,
                    [options.parentId['size']]: searchSize as string
                  },
                  textProductOptions: {size: 0}
                }
              }
              sortProductColor[searchColor]?.size.push(el)
            }
          }
        }

        const sortSizeProduct = sortProductColor &&
          Object.entries(sortProductColor)
            ?.reduce((acc, item) => {
              const {size, ...params} = item.length && item[1]
              return {
                ...acc,
                [item[0]]: {...params, size: size?.sort((a, b) => ((a.id as number) > (b.id as number) ? 1 : -1))}
              }
            }, {})

        sortSizeProduct && Object.keys(sortSizeProduct)?.length &&
        setBodyTable(sortSizeProduct)
      }

    }, [productVariants, productOptions])

    return (
      <div>
        <div className="flex flex-col overflow-x-auto">
          <div className="sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6">
              <div className="overflow-x-auto">
                <table style={{
                  borderCollapse: 'separate'
                }} className="min-w-full text-left text-sm font-light">
                  <thead className="font-medium">
                  <tr>
                    <th
                      className="px-4 py-2"/>
                    <th
                      style={{background: '#e2e2e2'}}
                      scope="col"
                      className="uppercase px-4 py-2">
                      <div>Size</div>
                      <div>Color</div>
                    </th>
                    {headerTable
                      ?.map((item) => (
                        <th key={item.id}
                            style={{background: '#e2e2e2'}}
                            scope="col"
                            className="uppercase px-4 py-2">
                          <div> {item.name}</div>
                          <div>
                            <span className='text-sm text-body mt-2'>$</span>
                            {item.price}
                          </div>
                        </th>
                      ))}
                  </tr>
                  </thead>
                  <tbody>
                  {bodyTable && Object.keys(bodyTable)?.length &&
                    Object.entries(bodyTable)
                      ?.map((itemBody, i) => (
                        <tr key={itemBody[0]}
                        >
                          <td className="px-2 py-1 bg-none" style={{
                            background: 'none'
                          }}>
                            <Image src={itemBody[1]?.image?.file?.url as string} width='40px' height='40px'/>
                          </td>
                          <td className="uppercase px-4 py-1" style={{
                            background: i % 2 === 0
                              ? '#eee'
                              : '#e2e2e2'
                          }}>
                            {itemBody[1].name as string}
                          </td>

                          {itemBody[1]?.size?.map((item) => (
                            <Cell
                              style={{
                                background: i % 2 === 0
                                  ? '#eee'
                                  : '#e2e2e2'
                              }}
                              key={item.id} val={item.productOption.quantity as number}
                              maxQuantity={item.stockLevel as number}
                              updateProduct={(val) => updateProductPrice(itemBody[0], val, item.name as string)}
                            />
                          ))}
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {showTotalPriceCount
          ? (
            <div className='flex gap-2 justify-between py-5 flex-wrap mt-5'>
              <div>
                <div>Total Items : {totalProductPrice.totalItems}</div>
                <div>Total Price : {totalProductPrice.totalPrice} {currency} </div>
              </div>
              <div className='flex w-[480px] max-[580px]:text-sm gap-2 flex-wrap xs:mt-5'>
                <Button
                  elType={BUTTON_TYPE.BUTTON}
                  type="button"
                  disabled={!totalProductPrice.totalItems}
                  small
                  onClick={() => checkOutProduct()}
                >
                  {checkoutLabel}
                </Button>

                <Button
                  small
                  elType={BUTTON_TYPE.BUTTON}
                  type="button"
                  disabled={!totalProductPrice.totalItems}
                  onClick={() => addToCartProduct()}
                >
                  {addLabel} - {' '}
                  <Price
                    price={totalProductPrice.totalPrice}
                  />
                  {'Total'}
                </Button>
              </div>
            </div>)
          : null
        }
      </div>
    );
  }
;

export default TableProducts;