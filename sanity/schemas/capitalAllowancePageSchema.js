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
  name: 'capitalAllowancePage',
  title: 'Capital Allowance Page',
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
      name: 'pageImage',
      title: 'Page Image',
      type: 'image',
      options: {
        hotspot: true,
      }
    }),
   

    defineField({
      name: 'introductionHeading',
      title: 'Introduction Heading',
      type: 'string',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'introductionParagraph1',
      title: 'Introduction Paragraph 1',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'introductionParagraph2',
      title: 'Introduction Paragraph 2',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'introductionParagraph3',
      title: 'Introduction Paragraph 3',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
   
   
    defineField({
      name: 'mainSectionHeading1',
      title: 'Main Section Heading1',
      type: 'string',
      validation: (rule) => rule.required(),
    }),


    //TODO: 7
    defineField({
      name: 'subSection1Heading1',
      title: 'Sub Section 1 Heading1',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'subSection1Image1',
      title: 'subSection1 Image 1',
      type: 'image',
      options: {
        hotspot: true,
      }
    }),
    defineField({
      name: 'subSection1Array1',
      title: 'subSection 1 Array1',
      type: 'array',
      of: [{type: 'string'}],
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'subSection1Heading2',
      title: 'subSection 1 Heading2',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'subSection1Image2',
      title: 'subSection1 Image 2',
      type: 'image',
      options: {
        hotspot: true,
      }
    }),
    defineField({
      name: 'subSection1Array2',
      title: 'subSection 1 Array2',
      type: 'array',
      of: [{type: 'string'}],
      validation: (rule) => rule.required(),
    }),


    defineField({
      name: 'subSection1Heading3',
      title: 'subSection 1 Heading 3',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'subSection1Image3',
      title: 'subSection1 Image 3',
      type: 'image',
      options: {
        hotspot: true,
      }
    }),
    defineField({
      name: 'subSection1Array3',
      title: 'subSection 1 Array 3',
      type: 'array',
      of: [{type: 'string'}],
      validation: (rule) => rule.required(),
    }),


    defineField({
      name: 'subSection1Heading4',
      title: 'subSection 1 Heading 4',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'subSection1Image4',
      title: 'subSection1 Image 4',
      type: 'image',
      options: {
        hotspot: true,
      }
    }),
    defineField({
      name: 'subSection1Array4',
      title: 'subSection 1 Array 4',
      type: 'array',
      of: [{type: 'string'}],
      validation: (rule) => rule.required(),
    }),


    defineField({
      name: 'subSection1Heading5',
      title: 'subSection 1 Heading5',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'subSection1Image5',
      title: 'subSection1 Image 5',
      type: 'image',
      options: {
        hotspot: true,
      }
    }),
    defineField({
      name: 'subSection1Array5',
      title: 'subSection 1 Array5',
      type: 'array',
      of: [{type: 'string'}],
      validation: (rule) => rule.required(),
    }),


    defineField({
      name: 'subSection1Heading6',
      title: 'subSection 1 Heading 6',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'subSection1Image6',
      title: 'subSection1 Image 6',
      type: 'image',
      options: {
        hotspot: true,
      }
    }),
    defineField({
      name: 'subSection1Array6',
      title: 'subSection 1 Array 6',
      type: 'array',
      of: [{type: 'string'}],
      validation: (rule) => rule.required(),
    }),


    defineField({
      name: 'subSection1Heading7',
      title: 'subSection 1 Heading 7',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'subSection1Image7',
      title: 'subSection1 Image 7',
      type: 'image',
      options: {
        hotspot: true,
      }
    }),
    defineField({
      name: 'subSection1Array7',
      title: 'subSection 1 Array 7',
      type: 'array',
      of: [{type: 'string'}],
      validation: (rule) => rule.required(),
    }),



    defineField({
      name: 'mainSectionHeading2',
      title: 'Main Section Heading2',
      type: 'string',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'subSection2Array',
      title: 'subSection 2 Array',
      type: 'array',
      of: [{type: 'string'}],
      validation: (rule) => rule.required(),
    }),


    defineField({
      name: 'contactUsHeading',
      title: 'contactUsHeading',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'contactUsParagraph',
      title: 'contactUsParagraph',
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
