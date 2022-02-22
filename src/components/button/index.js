import Button from './Button'

import { use, registerComponent } from '../../utils/plugins'

const Plugin = {
    install(Vue) {
        registerComponent(Vue, Button)
    }
}

// Vue plugin 機制
use(Plugin)

export default Plugin

// 單獨導出 - 按需加載
export {
    Button as BButton
}
