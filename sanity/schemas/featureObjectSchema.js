import { HomeIcon } from '@sanity/icons'
import { format, parseISO } from 'date-fns'
import { defineField, defineType } from 'sanity'




export default defineType({
  name: 'featureObjectSchema',
  title: 'Feature Object Schema',
  type: 'object',
  fields: [
    defineField({
      name: 'featureTitle',
      title: 'Feature Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
        name: 'featureText',
        title: 'Feature Text',
        type: 'string',
        validation: (rule) => rule.required(),
      }),
    ]
})
   