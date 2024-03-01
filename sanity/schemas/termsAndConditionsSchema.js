import { PackageIcon } from '@sanity/icons'
import { format, parseISO } from 'date-fns'
import { defineField, defineType, defineConfig } from 'sanity'
// import { muxInput } from 'sanity-plugin-mux-input'

/**
 *
 * Here you'll be able to edit the different fields that appear when you 
 * create or edit a post in the studio.
 * 
 * Here you can see the different schema types that are available:

  https://www.sanity.io/docs/schema-types

 */



export default defineType({
  name: 'termsAndConditionsPage',
  title: 'Terms and Conditions Page',
  icon: PackageIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
        name: 'subtitle',
        title: 'subTitle',
        type: 'string',
        validation: (rule) => rule.required(),
      }),

      defineField({
        name: 'termsAndConditionsDate',
        title: 'Terms and Conditions Date',
        type: 'date',
        validation: (rule) => rule.required(),
      }),    

    defineField({
        name: 'termsAndConditionsHeading',
        title: 'Terms and Conditions Heading',
        type: 'string',
      }),
    defineField({
      name: 'termsAndConditionsText',
      title: 'Terms and Conditions Text',
      type: 'text',
      validation: (rule) => rule.required(),
    }),


  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      date: 'date',
      media: 'coverImage',
    },
    prepare({ title, media, author, date }) {
      const subtitles = [
        author && `by ${author}`,
        date && `on ${format(parseISO(date), 'LLL d, yyyy')}`,
      ].filter(Boolean)

      return { title, media, subtitle: subtitles.join(' ') }
    },
  },
})
