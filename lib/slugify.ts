interface ISlugOptions {
    replacement: string,
    lower: true,
    strict: true,
    trim: true
}

export default function slugify (path: string, slugOptions: ISlugOptions): String {
    //let slug = path.replace(/ /g, slugOptions?.replacement || '-');
    // return slug;
    return path.toString().toLowerCase()
        .replace(/\s+/g, '-') // Replace spaces with -
        .replace(/[^\w\-]+/g, '') // Remove all non-word chars
        .replace(/\-\-+/g, '-') // Replace multiple - with single -
        .replace(/^-+/, '') // Trim - from start of text
        .replace(/-+$/, ''); // Trim - from end of text
};
