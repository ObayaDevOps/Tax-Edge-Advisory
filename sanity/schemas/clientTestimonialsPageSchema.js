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
  name: 'clientTestimonialsPage',
  title: 'Client Testimonials Page',
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
      name: 'headingTop',
      title: 'Heading Top',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'scrollingText1',
      title: 'scrollingText1',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
        name: 'scrollingText2',
        title: 'scrollingText2',
        type: 'string',
        validation: (rule) => rule.required(),
      }),
      defineField({
        name: 'scrollingText3',
        title: 'scrollingText3',
        type: 'string',
        validation: (rule) => rule.required(),
      }),
      defineField({
        name: 'scrollingText4',
        title: 'scrollingText4',
        type: 'string',
        validation: (rule) => rule.required(),
      }),
    defineField({
        name: 'subheading',
        title: 'SubHeading',
        type: 'string',
        validation: (rule) => rule.required(),
      }),
    // defineField({
    //   name: 'slug',
    //   title: 'Slug',
    //   type: 'slug',
    //   options: {
    //     source: 'title',
    //     maxLength: 96,
    //     isUnique: (value, context) => context.defaultIsUnique(value, context),
    //   },
    //   validation: (rule) => rule.required(),
    // }),

    //Top Background Image
    defineField({
        name: 'backgroundImage',
        title: 'Background Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      }),



      //What we do
      defineField({
        name: 'whatWeDoTitle1',
        title: 'What We Do Title 1',
        type: 'string',
        validation: (rule) => rule.required(),
      }),
      defineField({
        name: 'whatWeDoContentParagraph1',
        title: 'What We Do Section Paragraph 1',
        type: 'text',
      }),
      defineField({
        name: 'whoWeDoImage1',
        title: 'What We Do Section Image 1',
        type: 'image',
        options: {
          hotspot: true,
        }
      }),
      defineField({
        name: 'whatWeDoButtonText1',
        title: 'What We Do Button Text 1',
        type: 'string',
        validation: (rule) => rule.required(),
      }),



      defineField({
        name: 'whatWeDoTitle2',
        title: 'What We Do Title 2',
        type: 'string',
        validation: (rule) => rule.required(),
      }),
      defineField({
        name: 'whatWeDoContentParagraph2',
        title: 'What We Do Section Paragraph 2',
        type: 'text',
      }),
      defineField({
        name: 'whoWeDoImage2',
        title: 'What We Do Section Image 2',
        type: 'image',
        options: {
          hotspot: true,
        }
      }),
      defineField({
        name: 'whatWeDoButtonText2',
        title: 'What We Do Button Text 2',
        type: 'string',
        validation: (rule) => rule.required(),
      }),



      defineField({
        name: 'whatWeDoTitle3',
        title: 'What We Do Title 3',
        type: 'string',
        validation: (rule) => rule.required(),
      }),
      defineField({
        name: 'whatWeDoContentParagraph3',
        title: 'What We Do Section Paragraph 3',
        type: 'text',
      }),
      defineField({
        name: 'whoWeDoImage3',
        title: 'What We Do Section Image 3',
        type: 'image',
        options: {
          hotspot: true,
        }
      }),
      defineField({
        name: 'whatWeDoButtonText3',
        title: 'What We Do Button Text 3',
        type: 'string',
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
