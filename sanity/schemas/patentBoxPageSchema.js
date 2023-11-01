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
  name: 'patentBoxPage',
  title: 'Patent Box Page',
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
      name: 'section3Heading',
      title: 'Section 3 Heading',
      type: 'string',
      validation: (rule) => rule.required(),
    }),


    //Features Boxes - TODO Section3
    defineField({
      name: 'subsectionHeading1',
      title: 'SubSection Heading 1',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'subsectionImage1',
      title: 'Subsection Image 1',
      type: 'image',
      options: {
        hotspot: true,
      }
    }),
    defineField({
      name: 'subsectionParagraph1',
      title: 'SubSection Paragraph 1',
      type: 'text',
      validation: (rule) => rule.required(),
    }),


    defineField({
      name: 'subsectionHeading2',
      title: 'SubSection Heading 2',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'subsectionImage2',
      title: 'Subsection Image 2',
      type: 'image',
      options: {
        hotspot: true,
      }
    }),
    defineField({
      name: 'subsectionParagraph2',
      title: 'SubSection Paragraph 2',
      type: 'text',
      validation: (rule) => rule.required(),
    }),


    defineField({
      name: 'subsectionHeading3',
      title: 'SubSection Heading 3',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'subsectionImage3',
      title: 'Subsection Image 3',
      type: 'image',
      options: {
        hotspot: true,
      }
    }),
    defineField({
      name: 'subsectionParagraph3',
      title: 'SubSection Paragraph 3',
      type: 'text',
      validation: (rule) => rule.required(),
    }),


    defineField({
      name: 'subsectionHeading4',
      title: 'SubSection Heading 4',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'subsectionImage4',
      title: 'Subsection Image 4',
      type: 'image',
      options: {
        hotspot: true,
      }
    }),
    defineField({
      name: 'subsectionParagraph4',
      title: 'SubSection Paragraph 4',
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
      name: 'sectionArray1',
      title: 'Section Array1',
      type: 'array',
      of: [{type: 'string'}],
      validation: (rule) => rule.required(),
    }),



    defineField({
      name: 'section4Paragraph',
      title: 'Section 4 Paragraph',
      type: 'text',
      validation: (rule) => rule.required(),
    }),


    defineField({
      name: 'section5Heading',
      title: 'Section 5 Heading',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'section5Paragraph',
      title: 'Section 5 Paragraph',
      type: 'text',
      validation: (rule) => rule.required(),
    }),


    defineField({
      name: 'section6Heading',
      title: 'Section 6 Heading',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'SectionArray2',
      title: 'Section Array2',
      type: 'array',
      of: [{type: 'string'}],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'section6Paragraph',
      title: 'Section 6 Paragraph',
      type: 'text',
      validation: (rule) => rule.required(),
    }),

    //Features Grid - TODO


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
