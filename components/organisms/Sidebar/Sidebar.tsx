import React from 'react';
import NavMenu from 'components/molecules/AccountNavMenu';
import Button from 'components/atoms/Button';
import { BUTTON_STYLE, BUTTON_TYPE } from 'types/shared/button';
import type { AccountNavLinkProps } from 'components/atoms/AccountNavLink';
import useLogout from 'hooks/useLogout';
import AccountDetails, {
  AccountDetailsProps,
} from 'components/atoms/AccountDetails';
import useI18n from 'hooks/useI18n';

export interface SidebarProps {
  links: AccountNavLinkProps[];
  accountDetails?: AccountDetailsProps;
}

const TheSidebar: React.FC<SidebarProps> = ({ links, accountDetails }) => {
  const i18n = useI18n();
  const logoutLabel = i18n('account.logout.label');

  const logout = useLogout();

  return (
    <aside className="hidden h-full min-w-[275px] md:block">
      <div className="fixed flex h-full flex-col items-start overflow-auto">
        {accountDetails && (
          <div className="mb-10">
            <AccountDetails {...accountDetails} />
          </div>
        )}
        <NavMenu links={links} />
        <form
          onSubmit={(e) => {
            e.preventDefault();
            logout();
          }}
          className="mt-20">
          <Button
            elType={BUTTON_TYPE.BUTTON}
            buttonStyle={BUTTON_STYLE.SECONDARY}
            type="submit"
            small>
            {logoutLabel}
          </Button>
        </form>
      </div>
    </aside>
  );
};

export default TheSidebar;
