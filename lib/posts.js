// lib/posts.js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export function getPostData(filename) {
    const filePath = path.join(process.cwd(), 'posts', filename); // Path to your Markdown file
    const fileContents = fs.readFileSync(filePath, 'utf8'); // Read the file contents
    const { data, content } = matter(fileContents); // Parse front matter and content
    return { data, content }; // Return the parsed data
}
