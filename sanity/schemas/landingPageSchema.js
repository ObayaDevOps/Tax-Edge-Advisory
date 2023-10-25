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
  name: 'landingPage',
  title: 'Landing Page',
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
      name: 'headingTopDark',
      title: 'Heading Top Dark',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'headingTopLight',
      title: 'Heading Top Light',
      type: 'string',
      validation: (rule) => rule.required(),
    }),


    defineField({
      name: 'whatWeDoContentParagraph1',
      title: 'What We Do Section Paragraph',
      type: 'text',
    }),

    defineField({
      name: 'buttonTextDark',
      title: 'Button Text Dark',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'buttonTextLight',
      title: 'Button Text Light',
      type: 'string',
      validation: (rule) => rule.required(),
    }),



    defineField({
      name: 'featuresHeadingTop',
      title: 'Features Heading Top',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'featuresHeadingMiddle',
      title: 'Features Heading Middle',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'featuresHeadingBottom',
      title: 'Features Heading Bottom',
      type: 'string',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'featuresBoxHeading1',
      title: 'Features Box Heading 1',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'featuresBoxText1',
      title: 'Features Text 1',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'featuresBoxHeading2',
      title: 'Features Box Heading 2',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'featuresBoxText2',
      title: 'Features Text 2',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    
    defineField({
      name: 'featuresBoxHeading3',
      title: 'Features Box Heading 3',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'featuresBoxText3',
      title: 'Features Text 3',
      type: 'string',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'featuresBoxHeading4',
      title: 'Features Box Heading 4',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'featuresBoxText4',
      title: 'Features Text 4',
      type: 'string',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'featuresBoxHeading5',
      title: 'Features Box Heading 5',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'featuresBoxText5',
      title: 'Features Text 5',
      type: 'string',
      validation: (rule) => rule.required(),
    }),





    defineField({
      name: 'callToActionText1',
      title: 'Call To Action Text 1',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'callToActionText2',
      title: 'Call To Action Text 2',
      type: 'string',
      validation: (rule) => rule.required(),
    }),


    defineField({
      name: 'socialProofImage',
      title: 'Social Proof Image',
      type: 'image',
      options: {
        hotspot: true,
      }
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
