type SlugOptions = {
    replacement: string;
    lower: boolean;
    strict: boolean;
    trim: boolean;
};

interface ISlugOptions extends SlugOptions {
    replacement: '-',
    lower: true,
    strict: true,
    trim: true
}

export default function slugify (path: string, slugOptions: ISlugOptions): String {
    let slug = path.replace(/ /g, slugOptions?.replacement);
    if (slugOptions.lower) {
        slug = slug.toLowerCase();
    }
    if (slugOptions.trim) {
        slug = slug.trim();
    }
    return slug;
};
