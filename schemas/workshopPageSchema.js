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
  name: 'workshopPage',
  title: 'Workshop Page',
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
      name: 'workshopName',
      title: 'Workshop Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'subTitle',
      title: 'Sub Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
        name: 'artistName',
        title: 'Artist Name',
        type: 'string',
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

    defineField({
      name: 'workshopParagraphText',
      title: 'Workshop Paragraph Text',
      type: 'text',
      validation: (rule) => rule.required(),
    }),

    defineField({
        name: 'featuresList',
        title: 'Features List',
        type: 'array',
        of:[{type: 'string'}],
        validation: (rule) => rule.required(),
      }),
      defineField({
        name: 'artDetailsList',
        title: 'Art Details List',
        type: 'array',
        of:[{type: 'string'}],
        validation: (rule) => rule.required(),
      }),
      defineField({
        name: 'workshopStartDate',
        title: 'Workshop Start Date',
        type: 'date',
        validation: (rule) => rule.required(),
      }),
      defineField({
        name: 'workshopEndDate',
        title: 'Workshop End Date',
        type: 'date',
        validation: (rule) => rule.required(),
      }),



      //Display Parameters
      defineField({
        name: 'currentlyActiveWorkshop',
        title: 'Currently Active ?',
        type: 'boolean',
        validation: (rule) => rule.required(),
      }),
      defineField({
        name: 'dropDownMenuOneLiner',
        title: 'Drop Down Menu One Liner',
        type: 'string',
        options: {
          maxLength: 50
        }
      }),
      // defineField({
      //   name: 'linkToPurchaseUrl',
      //   title: 'Link to Purchase URL',
      //   type: 'url',
      //   validation: Rule => Rule.uri({
      //     scheme: ['http', 'https']
      //   }),
      //   hidden: ({ document }) => !document?.availableForPurchase,
      // }),

      //For the Archive Page
      defineField({
        name: 'archivePageDisplayShortDescription',
        title: 'Archive Page Display Short Description',
        type: 'string',
        validation: (rule) => rule.required(),
      }),

    //Archive Images
    defineField({
        name: 'archiveDisplayImage',
        title: 'Archive Display Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      }),
      defineField({
        name: 'artistPFP',
        title: 'Artist Profile Picture',
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
