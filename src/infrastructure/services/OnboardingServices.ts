import type { NextRouter } from 'next/router';

import { configGet, configPost } from '../api/configFetch';
import apiClient from '../api/index';
import { UtilServices } from './utilsServices';

const createUrl = (base: string, path: string) => `${base}${path}`;
const BASE_URL: any = process.env.NEXT_PUBLIC_ENV_VARIABLE;

type OnboardingItems = {
  id_tenant: number;
  onboarding_item_1: string;
  onboarding_item_2: string;
  onboarding_item_3: string;
  onboarding_item_4: string;
  onboarding_item_5: string;
  onboarding_item_6: string;
  onboarding_item_7: string;
  onboarding_item_8: string;
  onboarding_item_9: string;
};

export class OnboardingItemsService {
  public router: NextRouter;

  constructor(router: NextRouter) {
    this.router = router;
  }

  /**
   * Get all onboarding activies that the user has permission to see, based on the logged buyer
   *
   * METHOD: GET
   */
  public getOnboardingItems = async () => {
    try {
      const response = await apiClient(
        configGet(createUrl(BASE_URL, '/buyerOnboardingItems'))
      );

      return response.data;
    } catch (error: any) {
      if (error.response?.status === 404 || error.response?.status === 400) {
        throw error;
      } else {
        UtilServices.serverIsDown(this.router);
        throw error;
      }
    }
  };

  /** Create a onboarding item by the buyer logged.
   *
   * METHOD: POST
   */
  public createOnboardingItems = async (dataForm: OnboardingItems) => {
    try {
      const response = await apiClient(
        configPost([createUrl(BASE_URL, '/buyerOnboardingItems')], dataForm)
      );

      return response.data;
    } catch (error: any) {
      if (error.response?.status === 404 || error.response?.status === 400) {
        throw error;
      } else {
        UtilServices.serverIsDown(this.router);
        throw error;
      }
    }
  };
}
