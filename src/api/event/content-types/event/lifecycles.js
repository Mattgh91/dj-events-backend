const slugify = require('slugify')

// https://docs.strapi.io/developer-docs/latest/development/backend-customization/models.html#hook-event-object

module.exports = {
    beforeCreate(event) {
        setSlug(event.params.data)
    },
    beforeUpdate(event) {
        setSlug(event.params.data)
    }
};

const setSlug = (data) => {
    if (data.name) {
        data.slug = slugify(data.name.toLowerCase())
    }
}
