export interface LinkData {
    label: string,
    path: string
}

export interface Project {
    name: string,
    imagePath: string,
    images: Array,
    classes: string,
    childClasses: string,
    captions: Array<string>
}

export type ModalProps = {
    onClose: any, 
    children: any, 
    actionBar: any, 
    classes: string, 
    childClasses: string
}

export type BlogComponentType = {
    children: any
}

export type BlogCardProps = {
    key: any,
    metadata: any,
    classes: any
}


export type CarouselProps = {
    items: any, 
    itemVariants: any, 
    itemLocations: any, 
    itemStyle: any, 
    indices: any, 
    carouselTitle: any, 
    CarouselItem: any, 
    modalAction: any
}

export type CarouselCardProps = {
    item: any,
    key: any,
    itemVariants: any,
    animatedItem: any,
    itemStyle: any,
    clickCard: any,
    hoverInfo: string
}

export type SocialsProps = {
    github:string, 
    linkedin: string
}

export type ResumeCardProps = {
    job: any,
    children: any,
    classes: string
}

export type NavigationBarLinkProps = {
    link: any,
    classes?: string,
    activeFunction?: any
}

export type FloaterCardProps = {
    skill: string
}

export type ThemeContextProps = {
    isLight: boolean,
    setIsLight: any
}