export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d8feab502b0c8205f0de7f4',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-9wf5k5df',
                  apiId: '55e52744-1733-4b2f-ab66-3687acb4f58d'
                },
                {
                  buildHookId: '5d8feab611b7b72cc5066a50',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-1tf4n86r',
                  apiId: 'b622ffa1-c109-438b-af01-d618d9f4350d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ed-506/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-1tf4n86r.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
