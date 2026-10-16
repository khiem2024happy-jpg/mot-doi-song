export const site = { name: 'Một Đời Sống', description: 'Những bài luận về con người, thành công, mất mát, hạnh phúc và ý nghĩa của sự tồn tại.', url: (process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com').replace(/\/$/, '') };
export const categories = [
 {slug:'theo-duoi',name:'Những điều ta theo đuổi',desc:'Thành công, tham vọng và những điều ta khao khát.'},
 {slug:'mat-mat',name:'Những điều ta đánh mất',desc:'Mất mát, thay đổi và học cách tiếp tục.'},
 {slug:'noi-tam',name:'Những cuộc đối thoại nội tâm',desc:'Cô đơn, lo âu và thế giới bên trong.'},
 {slug:'binh-thuong',name:'Những ngày bình thường',desc:'Ý nghĩa của những điều giản dị.'},
 {slug:'su-ton-tai',name:'Những câu hỏi về sự tồn tại',desc:'Tự do, thời gian và ý nghĩa cuộc sống.'},
 {slug:'nghe-thuat-song',name:'Nghệ thuật sống',desc:'Hạnh phúc, bình an và những lựa chọn có ý thức.'}
];
