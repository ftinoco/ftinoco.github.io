import DOMPurify from "dompurify";
import React from "react";
 
export const scrollTo = (
    ev: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    setSection: React.Dispatch<React.SetStateAction<string>>
) => {
    ev.preventDefault();
    const href = (ev.target as HTMLAnchorElement).getAttribute('href');
    if (href) setSection(href.replace('#', ''))
}

/**
 * Sanitizing the html description
 * @param item object
 * @returns Object as parameter for dangerouslySetInnerHTML method
 * @see https://blog.logrocket.com/using-dangerouslysetinnerhtml-in-a-react-application/
 */
 export const sanitizedData = (item: any, prop:string) => {
    let html = item[prop];
    return { __html: DOMPurify.sanitize(html) }
}
