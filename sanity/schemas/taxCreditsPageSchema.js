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
  name: 'taxCreditsPage',
  title: 'Tax Credits Page',
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
      name: 'section1Heading',
      title: 'Section 1 Heading',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'section1Paragraph1',
      title: 'Section 1 Paragraph 1',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'section1Paragraph2',
      title: 'Section 1 Paragraph 2',
      type: 'text',
      validation: (rule) => rule.required(),
    }),

    //Features Grid 1 Content - TODO
    defineField({
      name: 'subSection1Array1',
      title: 'subSection 1 Array1',
      type: 'array',
      of: [{type: 'string'}],
      validation: (rule) => rule.required(),
    }),


    defineField({
      name: 'section1Paragraph3',
      title: 'Section 1 Paragraph 3',
      type: 'text',
      validation: (rule) => rule.required(),
    }),



    defineField({
      name: 'section2Heading',
      title: 'Section 2 Heading',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'section2Paragraph1',
      title: 'Section 2 Paragraph 1',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'section2Paragraph2',
      title: 'Section 2 Paragraph 2',
      type: 'text',
      validation: (rule) => rule.required(),
    }),


    //Features Grid 2 Content - TODO
    defineField({
      name: 'subSectionArray2',
      title: 'subSection Array 2',
      type: 'array',
      of: [{type: 'featureObjectSchema'}],
      validation: (rule) => rule.required(),
    }),


    defineField({
      name: 'section3Heading',
      title: 'Section 3 Heading',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'section3Paragraph1',
      title: 'Section 3 Paragraph 1',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'section3Paragraph2',
      title: 'Section 3 Paragraph 2',
      type: 'text',
      validation: (rule) => rule.required(),
    }),



    defineField({
      name: 'section4Heading',
      title: 'Section 4 Heading',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'section4Paragraph1',
      title: 'Section 4 Paragraph 1',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'section4Paragraph2',
      title: 'Section 4 Paragraph 2',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'section4Paragraph3',
      title: 'Section 4 Paragraph 3',
      type: 'text',
      validation: (rule) => rule.required(),
    }),



    defineField({
      name: 'contactUsHeading',
      title: 'Contact Us Heading',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'contactUsParagraph',
      title: 'Contact Us Paragraph',
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
