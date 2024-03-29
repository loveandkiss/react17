/**
 * 创建 Redux State Slice
 */

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import type { RootState } from '../../store'

// 为 slice state 定义一个类型
interface CounterState {
  value: number;
}

// 使用该类型定义初始 state
const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  // `createSlice` 将从 `initialState` 参数推断 state 类型
  initialState,
  reducers: {
    increment: (state) => {
      // eslint-disable-next-line no-param-reassign
      state.value += 1;
    },
    decrement: (state) => {
      // eslint-disable-next-line no-param-reassign
      state.value -= 1;
    },
    // 使用 PayloadAction 类型声明 `action.payload` 的内容
    incrementByAmount: (state, action: PayloadAction<number>) => {
      // eslint-disable-next-line no-param-reassign
      state.value += action.payload;
    },
  },
});

// Action
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
// window.console.log('increment', increment)

// 选择器等其他代码可以使用导入的 `RootState` 类型
// export const selectCount = (state: RootState) => state.counter.value
// window.console.log('selectCount', selectCount())

export default counterSlice.reducer;
