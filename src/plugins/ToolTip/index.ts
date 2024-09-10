import type { App } from 'vue'
import ToolTip from './ToolTip.vue'

export const toolTipPlugin = (app) => {
  app.component('ToolTip', ToolTip)
}
