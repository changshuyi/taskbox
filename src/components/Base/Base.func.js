import { action } from '@storybook/addon-actions';

const actions = {
  onTrafficClick: action('onTrafficClick'),
  onRightBlockSwitch: action('onRightBlockSwitch'),
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask'),
};

//控制開關右邊顯示資料的block 待補齊action
/*actions.onRightBlockSwitch = (type) => {
  console.log(type);
}*/

export {actions};