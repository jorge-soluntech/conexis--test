import Image from 'next/image';

import AlertMessage from '@/components/common/alertComponent/AlertMessage';
import { Button, Card, Form } from '@/components/designSystem';
import type { Dashboards } from '@/consts/permissions';

import styles from './CreateAttachments.module.scss';
import { FormAddAttachment } from './formAddAttachment/FormAddAttachment';
import useCreateAttachments from './useCreateAttachments';

const PLUS_ICON = '/assets/icons/plus_icon.svg';

type ICreateAttachments = {
  dashboard: Dashboards;
};
/**
 * CreateAttachments component displays a form to input Attachments.
 * This component uses useCreateAttachments hook to manage form data and validation.
 *
 * @returns the CreateAttachments form - step 4 for suppliers or buyers depending the dashboard prop
 */

const CreateAttachments = ({ dashboard }: ICreateAttachments) => {
  const {
    onBack,
    errors,
    setErrors,
    isLoading,
    showError,
    setShowError,
    attachments,
    setAttachments,
    isNewAttachment,
    setIsNewAttachment,
    handleContinue,
    buyerOptions,
  } = useCreateAttachments({ dashboard });
  return (
    <>
      <Card className={styles.form_create}>
        <div>
          {showError && (
            <AlertMessage
              message={errors[Object.keys(errors)[0] as string]!}
              afterClose={() => setShowError(false)}
            />
          )}
          <Form scrollToFirstError name="Attachments" onFinish={handleContinue}>
            <div className={styles.form_subtitle_container}>
              <div className={styles.form_small_title}>
                Attachments <span> (optional)</span>
              </div>
            </div>
            <FormAddAttachment
              errors={errors}
              setErrors={setErrors}
              setShowError={setShowError}
              attachments={attachments}
              setAttachments={setAttachments}
              isNewAttachment={isNewAttachment}
              setIsNewAttachment={setIsNewAttachment}
              dashboard={dashboard}
              buyerOptions={buyerOptions}
            />
            {attachments.length > 0 && !isNewAttachment && (
              <p
                className={styles.add_attachment}
                onClick={() => setIsNewAttachment(true)}
              >
                <Image alt="plus" width={12} height={12} src={PLUS_ICON} />
                Add another attachment
              </p>
            )}
            <div className={styles.continue_button}>
              <Button type="default" onClick={onBack}>
                Back
              </Button>
              <Button
                size="large"
                type="primary"
                htmlType="submit"
                loading={isLoading}
              >
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </Card>
    </>
  );
};

export default CreateAttachments;
