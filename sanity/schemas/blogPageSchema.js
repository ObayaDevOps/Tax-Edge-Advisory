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
  name: 'blogPage',
  title: 'Blog Page',
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
      name: 'blogName',
      title: 'Blog Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'subTitle',
      title: 'Sub Title',
      type: 'string',
    }),
    defineField({
        name: 'authorName',
        title: 'Author Name',
        type: 'string',
        validation: (rule) => rule.required(),
      }),

      defineField({
        name: 'blogDate',
        title: 'Blog Date',
        type: 'date',
        validation: (rule) => rule.required(),
      }),    

    defineField({
        name: 'blogParagraphHeading1',
        title: 'Blog Paragraph Heading 1',
        type: 'text',
      }),
    defineField({
      name: 'blogParagraphText1',
      title: 'Blog Paragraph Text 1',
      type: 'text',
      validation: (rule) => rule.required(),
    }),


    defineField({
      name: 'blogParagraphHeading2',
      title: 'Blog Paragraph Heading 2',
      type: 'text',
    }),
    defineField({
      name: 'blogParagraphText2',
      title: 'Blog Paragraph Text 2',
      type: 'text',
    }),

    defineField({
      name: 'blogParagraphHeading3',
      title: 'Blog Paragraph Heading 3',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'blogParagraphText3',
      title: 'Blog Paragraph Text 3',
      type: 'text',
    }),

    defineField({
      name: 'blogParagraphHeading4',
      title: 'Blog Paragraph Heading 4',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'blogParagraphText4',
      title: 'Blog Paragraph Text 4',
      type: 'text',
    }),

    defineField({
        name: 'blogTagList',
        title: 'Blog Tag List',
        type: 'array',
        of:[{type: 'string'}],
        validation: (rule) => rule.required(),
      }),


      //For the Archive Page
      defineField({
        name: 'blogLandingPageDisplayShortDescription',
        title: 'Blog Landing Page Display Short Description',
        type: 'string',
        validation: (rule) => rule.required(),
      }),

    //Archive Images
    defineField({
        name: 'blogLandingDisplayImage',
        title: 'Blog Landing Display Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      }),
      defineField({
        name: 'authorPFP',
        title: 'Author Profile Picture',
        type: 'image',
        options: {
          hotspot: true,
        },
      }),

    //Slug - URL
    {
        title: 'Slug',
        name: 'slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 200, // will be ignored if slugify is set
          slugify: input => input
                               .toLowerCase()
                               .replace(/\s+/g, '-')
                               .slice(0, 200)
        }
    }


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
