<script>
import { computed, defineComponent, onMounted, ref } from 'vue'

import BaseErrorMessage from '@/components/BaseErrorMessage.vue'

import UniqueID from '@/helpers/uniqueId'
import setupFormComponent from '@/helpers/setupFormComponent'

export default defineComponent({
  name: 'BaseInput',
  components: {
    BaseErrorMessage,
  },
  inheritAttrs: false,
  props: {
    /**
     * The type of the input
     * @type String
     * @default text
     * @name type
     */
    type: {
      type: String,
      default: 'text',
    },
    /**
     * The unique identifier of the input
     * @type String
     * @default input
     * @name name
     */
    name: {
      type: String,
      default: 'input',
    },
    /**
     * The placeholder text of the input
     * @type String
     * @default ''
     * @name placeholder
     */
    placeholder: {
      type: String,
      default: '',
    },
    /**
     * Used to determinate if the input is required
     * @type Boolean
     * @default false
     * @name required
     */
    required: {
      type: Boolean,
      default: false,
    },
    /**
     * Used to determinate if the input should be autofocused or not
     * @type Boolean
     * @default false
     * @name autofocus
     */
    autofocus: {
      type: Boolean,
      default: false,
    },
    /**
     * Used to determinate if the input is in disabled state
     * @type Boolean
     * @default false
     * @name disabled
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * Used to determinate if the input is in read only state
     * @type Boolean
     * @default false
     * @name readonly
     */
    readonly: {
      type: Boolean,
      default: false,
    },
    /**
     * The error message of the input
     * @type String
     * @default ''
     * @name error
     */
    error: {
      type: String,
      default: '',
    },
    /**
     * Used to set the field value
     * @type String | Number
     * @default ''
     * @name modelValue
     */
    modelValue: {
      type: [String, Number],
      default: '',
    },
  },
  setup(props, context) {
    const uuid = UniqueID().getID()
    const { updateValue } = setupFormComponent(props, context)
    const focus = ref(false)
    const inputRef = ref(null)

    const isAutoFocus = computed(() => {
      return props.autofocus
    })

    const isRequired = computed(() => {
      return props.required
    })

    const isDisabled = computed(() => {
      return props.disabled
    })

    const isReadOnly = computed(() => {
      return props.readonly
    })

    const hasPlaceHolder = computed(() => {
      if (props.placeholder !== undefined && props.placeholder !== null && props.placeholder.length > 0)
        return props.placeholder
      else
        return null
    })

    const hasError = computed(() => {
      if (props.error !== undefined && props.error !== null && props.error.length > 0)
        return props.error
      else
        return null
    })

    const toggleFocus = () => {
      focus.value = !focus.value
    }

    onMounted(() => {
      if (isAutoFocus.value)
        inputRef.value.focus()
    })

    return {
      uuid,
      focus,
      inputRef,
      isAutoFocus,
      isRequired,
      isDisabled,
      isReadOnly,
      hasPlaceHolder,
      hasError,
      toggleFocus,
      updateValue,
    }
  },
})
</script>

<template>
  <div
    class="input-container" :class="[
      isDisabled ? 'disabled' : '',
      isReadOnly ? 'readonly' : '',
      !isDisabled && !isReadOnly && focus ? 'focus' : '',
      hasError ? 'has-error' : '',
      $slots.prefix ? 'has-prefix' : '',
      $slots.suffix ? 'has-suffix' : '',
      $slots.prepend ? 'has-prepend' : '',
      $slots.append ? 'has-append' : '',
    ]"
  >
    <div class="input-wrapper">
      <label v-if="$slots.prepend" :for="uuid" class="input-prepend">
        <slot name="prepend" />
      </label>
      <div class="input-field">
        <label v-if="$slots.prefix" :for="uuid" class="input-prefix">
          <slot name="prefix" />
        </label>
        <input
          v-bind="{ ...$attrs, onInput: updateValue, onFocus: toggleFocus, onFocusout: toggleFocus }"
          :id="uuid"
          ref="inputRef"
          :name="name"
          :value="modelValue"
          :type="type"
          :placeholder="hasPlaceHolder"
          :required="isRequired"
          :aria-required="isRequired ? 'true' : false"
          :disabled="isDisabled"
          :aria-disabled="isDisabled ? 'true' : false"
          :readonly="isReadOnly"
          :aria-readonly="isReadOnly ? 'true' : false"
          :autofocus="isAutoFocus"
        >
        <label v-if="$slots.suffix" :for="uuid" class="input-suffix">
          <slot name="suffix" />
        </label>
      </div>
      <label v-if="$slots.append" :for="uuid" class="input-append">
        <slot name="append" />
      </label>
    </div>

    <BaseErrorMessage v-if="error" :id="`${uuid}-error`">
      {{ error }}
    </BaseErrorMessage>
  </div>
</template>
