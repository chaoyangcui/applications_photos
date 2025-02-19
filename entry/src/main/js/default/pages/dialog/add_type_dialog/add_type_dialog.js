/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @file: 新建相册移动复制图片、视频弹框
 */

export default {
    data: {
        inputName: ''
    },

/**
    * 弹框显示
    */
    show() {
        this.$element('addTypeDialog').show();
    },

/**
    * 弹框隐藏
    */
    close() {
        this.$element('addTypeDialog').close();
    },

/**
    * 确定
    */
    query() {
        this.close();
    },

/**
    * 取消
    */
    cancel() {
        this.close();
    },

/**
    * 全选全不选
    *
    * @param {string} name - 操作类型名称
    */
    operation(name) {
        this.$emit('addTypeDialogClick', name);
    }
};
