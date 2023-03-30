import Head from 'next/head';
import type { GetServerSideProps } from 'next';
import { getAuthLayout } from 'lib/utils/layout_getters';
import { withAuthLayout } from 'lib/utils/fetch_decorators';
import type { NextPageWithLayout, PageProps } from 'types/shared/pages';
import Button from 'components/atoms/Button';
import { BUTTON_TYPE } from 'types/shared/button';
import useI18n, { I18n } from 'hooks/useI18n';

const successText = (i18n: I18n) => ({
  pageTitle: i18n('account.set_new_password.success.page_title'),
  title: i18n('account.set_new_password.success.title'),
  message: i18n('account.set_new_password.success.message'),
  loginLink: i18n('account.set_new_password.success.login_link'),
});

const propsCallback: GetServerSideProps<PageProps> = async (context) => {
  const { locale } = context;
  return {
    props: {
      ...(locale ? { locale } : {}),
    },
  };
};

export const getStaticProps = withAuthLayout(propsCallback);

const CheckEmailPage: NextPageWithLayout<PageProps> = ({
  metaTitle,
  metaDescription,
}) => {
  const i18n = useI18n();
  const text = successText(i18n);
  return (
    <article className="mx-6 h-full pt-12 pb-10 md:pb-18 md:pt-16">
      <Head>
        <title>{text.pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="title" content={metaTitle} />
      </Head>

      <div className="flex h-full w-full flex-col items-center justify-center">
        <div className="w-full text-center md:max-w-[400px]">
          <h1 className="font-headings text-2xl font-semibold text-primary md:text-5xl">
            {text.title}
          </h1>
          {text.message && (
            <p className="mt-6 text-center text-sm text-body">{text.message}</p>
          )}
          <p className="mt-16 w-full text-center text-sm text-primary">
            <Button fullWidth href="/account/login" elType={BUTTON_TYPE.LINK}>
              {text.loginLink}
            </Button>
          </p>
        </div>
      </div>
    </article>
  );
};

CheckEmailPage.getLayout = getAuthLayout;

export default CheckEmailPage;
