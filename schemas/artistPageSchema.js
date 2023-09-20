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
  name: 'artistCardPage',
  title: 'Artist Card Page',
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
      name: 'artistName',
      title: 'Artist Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'artistDisiplines',
      title: 'Artist Displines',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
        name: 'artistDescription',
        title: 'Artist Description',
        type: 'string',
        validation: (rule) => rule.required(),
      }),

      defineField({
        name: 'artistPFP',
        title: 'Artist Profile Picture',
        type: 'image',
        options: {
          hotspot: true,
        },
      }),

      defineField({
        name: 'socialMediaUrl',
        title: 'Link Social Media',
        type: 'url',
        validation: Rule => [ 
          Rule.uri({ scheme: ['http', 'https'] }),
          rule.required(),
        ],
      }),

      defineField({
        name: 'currentlyActiveResidentArtist',
        title: 'Currently Active Resident ?',
        type: 'boolean',
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
