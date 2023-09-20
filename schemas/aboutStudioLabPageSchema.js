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
  name: 'aboutStudioLabPage',
  title: 'About Studio Lab Page',
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
      name: 'subTitle',
      title: 'Subtitle',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'introText',
      title: 'Into Text',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
        name: 'paragraphDescription',
        title: 'Paragraph Description',
        type: 'text',
        validation: (rule) => rule.required(),
      }),

    //slide show images  
    defineField({
        name: 'slideShowImages',
        title: 'Slide Show Images',
        type: 'array',
        of: [{type: 'image'}],
        options: {
          hotspot: true,
        },
        validation: (rule) => rule.required(),
    }),



    //Video Support
    // Link -currently installed: https://www.npmjs.com/package/sanity-plugin-mux-input
    // Link: https://docs.mux.com/guides/video/integrate-with-sanity#1-install-mux-plugin
    // defineField({
    //     name: 'workshopVideo',
    //     title: 'Workshop Video',
    //     type: 'document',
    //     fields: [
    //         {title: 'Title', name: 'title', type: 'string'},
    //         {
    //           title: 'Video file',
    //           name: 'video',
    //           type: 'mux.video',
    //         },
    //       ],
    // }),


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
