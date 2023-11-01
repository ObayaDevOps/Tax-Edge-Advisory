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
  name: 'rndLandingPage',
  title: 'RnD Landing Page',
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
      name: 'headingLarge',
      title: 'Heading Large',
      type: 'string',
      validation: (rule) => rule.required(),
    }),   
    defineField({
      name: 'pageHeadingImage',
      title: 'Page Heading Image',
      type: 'image',
      options: {
        hotspot: true,
      }
    }),
   

    defineField({
      name: 'headingSmall',
      title: 'Heading Small',
      type: 'string',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'introductionParagraph1',
      title: 'Introduction Paragraph 1',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'introductionParagraph2',
      title: 'Introduction Paragraph 2',
      type: 'text',
      validation: (rule) => rule.required(),
    }),


    //Box1
    defineField({
      name: 'box1TopHeading',
      title: 'Box1 Top Heading',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'box1TopImage',
      title: 'box1 Top Image',
      type: 'image',
      options: {
        hotspot: true,
      }
    }),
   

    defineField({
      name: 'box1ParagraphHeading1',
      title: 'Box1 Paragraph Heading 1',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'box1ParagraphText1',
      title: 'Box1 Paragraph Text 1',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
   
    defineField({
      name: 'box1ParagraphHeading2',
      title: 'Box1 Paragraph Heading 2',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'box1ParagraphText2',
      title: 'Box1 Paragraph Text 2',
      type: 'text',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'box1FeaturesTopHeading',
      title: 'Box1 Features Heading',
      type: 'string',
      validation: (rule) => rule.required(),
    }),


    defineField({
      name: 'box1FeaturesSubHeading1',
      title: 'Box1 Features SubHeading1',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'box1FeaturesSubText1',
      title: 'Box1 Features SubText 1',
      type: 'string',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'box1FeaturesSubHeading2',
      title: 'Box1 Features SubHeading2',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'box1FeaturesSubText2',
      title: 'Box1 Features SubText 2',
      type: 'string',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'box1FeaturesSubHeading3',
      title: 'Box1 Features SubHeading3',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'box1FeaturesSubText3',
      title: 'Box1 Features SubText 3',
      type: 'string',
      validation: (rule) => rule.required(),
    }),


    defineField({
      name: 'box1BottomItalicParagraphText',
      title: 'Box1 Bottom Italic Text',
      type: 'text',
      validation: (rule) => rule.required(),
    }),

   


    //Box2
    defineField({
      name: 'box2TopHeading',
      title: 'Box2 Top Heading',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'box2TopImage',
      title: 'box2 Top Image',
      type: 'image',
      options: {
        hotspot: true,
      }
    }),
   

    defineField({
      name: 'box2ParagraphHeading1',
      title: 'Box2 Paragraph Heading 1',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'box2ParagraphText1',
      title: 'Box2 Paragraph Text 1',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
   
    defineField({
      name: 'box2ParagraphHeading2',
      title: 'Box2 Paragraph Heading 2',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'box2ParagraphText2',
      title: 'Box2 Paragraph Text 2',
      type: 'text',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'box2FeaturesTopHeading',
      title: 'Box2 Features Heading',
      type: 'string',
      validation: (rule) => rule.required(),
    }),


    defineField({
      name: 'box2FeaturesSubHeading1',
      title: 'Box2 Features SubHeading1',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'box2FeaturesSubText1',
      title: 'Box2 Features SubText 1',
      type: 'string',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'box2FeaturesSubHeading2',
      title: 'Box2 Features SubHeading2',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'box2FeaturesSubText2',
      title: 'Box2 Features SubText 2',
      type: 'string',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'box2FeaturesSubHeading3',
      title: 'Box2 Features SubHeading3',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'box2FeaturesSubText3',
      title: 'Box2 Features SubText 3',
      type: 'string',
      validation: (rule) => rule.required(),
    }),


    defineField({
      name: 'box2BottomItalicParagraphText',
      title: 'Box2 Bottom Italic Text',
      type: 'text',
      validation: (rule) => rule.required(),
    }),


    //Contact Us Paragraph
    defineField({
      name: 'contactUsHeading',
      title: 'Contact Us Heading',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'contactUsParagraph1',
      title: 'Contact Us Paragraph 1',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'contactUsParagraph2',
      title: 'Contact Us Paragraph 2',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'contactUsParagraph3',
      title: 'Contact Us Paragraph 3',
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
