import { HomeIcon } from '@sanity/icons'
import { format, parseISO } from 'date-fns'
import { defineField, defineType } from 'sanity'

/**
 *
 * Here you'll be able to edit the different fields that appear when you 
 * create or edit a post in the studio.
 * 
 * Here you can see the different schema types that are available:

  https://www.sanity.io/docs/schema-types

 */



export default defineType({
  name: 'taxCalculatorPage',
  title: 'Tax Calculator Page',
  icon: HomeIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),


    defineField({
      name: 'headingTopSmall',
      title: 'Heading Top Small',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'headingMiddleLarge',
      title: 'Heading Middle Large',
      type: 'string',
      validation: (rule) => rule.required(),
    }),   
    defineField({
      name: 'headingBottomSmall',
      title: 'Heading Bottom Small',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
   

    defineField({
      name: 'lowerParagraphText',
      title: 'Lower Paragraph Text',
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
