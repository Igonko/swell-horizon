import React from 'react';
import SyncIcon from 'assets/icons/sync.svg';
import ShippingIcon from 'assets/icons/shipping.svg';
import { formatScheduleLabel } from 'lib/utils/subscription';
import type { Schedule } from 'types/subscription';

interface ScheduleLabelProps {
  type: 'billing' | 'order';
  base: string;
  schedule?: Schedule;
  icon?: boolean;
  textClasses?: string;
  iconClasses?: string;
  className?: string;
}

export const ScheduleLabel: React.FC<ScheduleLabelProps> = ({
  type,
  base,
  schedule,
  icon = false,
  textClasses,
  iconClasses,
  className,
}) => {
  if (!schedule) return null;

  const scheduleLabel = formatScheduleLabel(base, schedule);

  const IconSvg = type === 'order' ? ShippingIcon : SyncIcon;

  const label = <span className={textClasses ?? ''}>{scheduleLabel}</span>;

  if (icon) {
    return (
      <div
        className={`flex items-center space-x-1 text-primary ${
          className ?? ''
        }`}>
        <IconSvg className={iconClasses ?? ''} />
        {label}
      </div>
    );
  }

  return label;
};

export default ScheduleLabel;
