<template>
  <v-dialog
    v-model="open"
    :max-width="320"
  >
    <v-form
      ref="addInstanceForm"
      v-model="valid"
      class="mt-3"
      @submit.prevent="handleSave"
    >
      <v-card>
        <v-card-title class="card-heading py-2">
          <span class="focus--text">{{ title }}</span>
        </v-card-title>

        <v-card-text class="py-4">
          <v-text-field
            v-model="newName"
            autofocus
            outlined
            :label="label"
            :rules="[
              $rules.required
            ]"
            hide-details="auto"
            required
          />
        </v-card-text>

        <v-divider />

        <v-card-actions>
          <v-spacer />
          <app-btn
            color="warning"
            text
            @click="open = false"
          >
            {{ $t('app.general.btn.cancel') }}
          </app-btn>
          <app-btn
            color="primary"
            type="submit"
          >
            {{ $t('app.general.btn.save') }}
          </app-btn>
        </v-card-actions>
      </v-card>
    </v-form>
  </v-dialog>
</template>

<script lang="ts">
import { Component, Mixins, Prop, VModel } from 'vue-property-decorator'
import StateMixin from '@/mixins/state'

@Component({})
export default class FileNameDialog extends Mixins(StateMixin) {
  @VModel({ type: Boolean, required: true })
    open!: boolean

  @Prop({ type: String, required: true })
  readonly title!: string

  @Prop({ type: String, required: true })
  readonly label!: string

  @Prop({ type: String, required: true })
  readonly name!: string

  newName = ''
  valid = false

  mounted () {
    this.newName = this.name
  }

  handleSave () {
    if (this.valid) {
      this.$emit('save', this.newName)
      this.open = false
    }
  }
}
</script>
