export interface IBlog {
    id?: number,
    title: string,
    content: string,
    short_desc: string,
    created_at: string,
    categoryBlogId?: number
}