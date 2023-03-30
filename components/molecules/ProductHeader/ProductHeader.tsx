import RichText from 'components/atoms/RichText';
import Tag from 'components/atoms/Tag';
import type {ReactNode} from 'react';

export interface ProductHeaderProps {
  title: string;
  subtitle: string;
  description: string;
  tag?: ReactNode;
  showTitle?: boolean;
  showSubtitle?: boolean;
  showDescription?: boolean;
}

const ProductHeader: React.FC<ProductHeaderProps> = ({
  showTitle = true,
  showSubtitle = true,
  showDescription = true,
  title,
  subtitle,
  description,
  tag,
}) => (
  <div>
    {showSubtitle
      ? <h5 className="font-headings text-md font-semibold uppercase text-body">
        {subtitle}
      </h5>
      : null
    }
    {showTitle
      ? <h3 className="mt-2 font-headings text-5xl font-semibold text-primary">
        {title}
      </h3>
      : null
    }

    {tag && <Tag className="my-4">{tag}</Tag>}
    {showDescription
      ? <div className={`text-sm text-body ${tag ? 'lg:mt-2' : 'mt-2 lg:mt-3'}`}>
        <RichText content={description}/>
      </div>
      : null

    }

  </div>
);

export default ProductHeader;
