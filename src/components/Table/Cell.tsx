import React, {FC} from 'react';

interface InputProps {
  val: number
  updateProduct: (value: string) => void
  maxQuantity?: number
  style: any
}

const Cell: FC<InputProps> = ({
  val,
  updateProduct,
  maxQuantity,
  style
}): JSX.Element => {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, max?: number) => {
    const newValue = e.target.value;

    if (max && (+newValue > +max)) {
      updateProduct?.(`${max}`)
      return
    }
    if (+newValue < 0) {
      updateProduct?.('0')
      return
    }
    updateProduct?.(newValue)
  }

  return (
    <td
      style={{
        ...style
      }}
      className='px-4 py-1'>
      <input
        disabled={!maxQuantity}
        className={`w-8 ${maxQuantity ? 'opacity-100 disabled:hover:opacity-100'
          : 'opacity-50'}`}
        style={{
          background: 'inherit'
        }}
        type="number"
        placeholder="text"
        value={val}
        onChange={(e) => handleChange?.(e, maxQuantity)}
        min={0}
        max={maxQuantity}
      />
    </td>

  );
};

export default Cell;
