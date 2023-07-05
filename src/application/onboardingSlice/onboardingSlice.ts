import type { PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { NextRouter } from 'next/router';

import { OnboardingItemsService } from '@/infrastructure/services/OnboardingServices';

// Define a type for the slice state
type OnboardingState = {
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

export const readOnboardingItems = createAsyncThunk(
  'read/buyerOnboardingItemss',
  async (router: NextRouter, { rejectWithValue }): Promise<any> => {
    const onboardingItem = new OnboardingItemsService(router);
    try {
      const response = await onboardingItem.getOnboardingItems();
      return response.data;
    } catch (error) {
      return rejectWithValue(false);
    }
  }
);

export const createBuyerOnboardingItem = createAsyncThunk(
  'buyerOnboardingItems',
  async (
    dataCreate: { router: NextRouter; body: OnboardingState },
    { rejectWithValue }
  ): Promise<any> => {
    const onboardingItem = new OnboardingItemsService(dataCreate.router);
    try {
      await onboardingItem.createOnboardingItems(dataCreate.body);
      return true;
    } catch (error) {
      return rejectWithValue(false);
    }
  }
);

const initialState = {
  /** The current role of user logged Buyer or Supplier */
  valueItems: {
    id_tenant: 9,
    onboarding_item_1: '',
    onboarding_item_2: '',
    onboarding_item_3: '',
    onboarding_item_4: '',
    onboarding_item_5: '',
    onboarding_item_6: '',
    onboarding_item_7: '',
    onboarding_item_8: '',
    onboarding_item_9: '',
  } as OnboardingState,
};

export const onboardingSlice = createSlice({
  name: 'onboarding',
  initialState,
  reducers: {
    setCurrentUserRole: (state, action: PayloadAction<OnboardingState>) => {
      state.valueItems = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createBuyerOnboardingItem.fulfilled, (state) => ({ ...state }))
      .addCase(createBuyerOnboardingItem.rejected, (state) => ({ ...state }))
      .addCase(readOnboardingItems.fulfilled, (state, action) => {
        state.valueItems = action.payload;
      })
      .addCase(readOnboardingItems.rejected, (state) => ({ ...state }));
  },
});

export const { setCurrentUserRole } = onboardingSlice.actions;

export default onboardingSlice.reducer;
