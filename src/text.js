const importIcons = (value) => {
    return require(`./images/icon-${value}.svg`);
}

const importProfilePicture = (value) => {
    return require(`./images/image-${value}.jpg`);
}

const importMobilePicture = (value) => {
    return require(`./images/mobile/image-${value}.jpg`)
}

const importDesktopPicture = (value) => {
    return require(`./images/desktop/image-${value}.jpg`)
}

const images = {
    logo: require('./images/logo.svg').default,
    logoGreen: require('./images/logo-green.svg').default,
    arrowDown: importIcons('arrow-down'),
    facebook: importIcons('facebook'),
    hamburger: importIcons('hamburger'),
    instagram: importIcons('instagram'),
    pinterest: importIcons('pinterest'),
    twitter: importIcons('twitter'),
    profilePicture: {
        emily: importProfilePicture('emily'),
        jennie: importProfilePicture('jennie'),
        thomas: importProfilePicture('thomas')
    },
    mobile: {
        transform: importMobilePicture('transform'),
        standout: importMobilePicture('stand-out'),
        graphicDesign: importMobilePicture('graphic-design'),
        photography: importMobilePicture('photography'),
        milk: importMobilePicture('gallery-milkbottles'),
        orange: importMobilePicture('gallery-orange'),
        cone: importMobilePicture('gallery-cone'),
        sugar: importMobilePicture('gallery-sugar-cubes')
    },
    desktop: {
        transform: importDesktopPicture('transform'),
        standout: importDesktopPicture('stand-out'),
        graphicDesign: importDesktopPicture('graphic-design'),
        photography: importDesktopPicture('photography'),
        milk: importDesktopPicture('gallery-milkbottles'),
        orange: importDesktopPicture('gallery-orange'),
        cone: importDesktopPicture('gallery-cone'),
        sugar: importDesktopPicture('gallery-sugarcubes')
    }
}

export const lists = ['About', 'Services', 'Projects'];

export const headerSection = {   
    id: 'header',
    title: 'we are creatives',
    arrowDown: images.arrowDown,
    hamburger: images.hamburger,
    logo: images.logo
}


export const firstSection = [
    {
        id: 'transform',
        title: 'Transform your brand',
        text: 'We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.',
        linkText: 'Learn more'
    },
    {
        id: 'standout',
        title: 'Stand out to the right audience',
        text: "Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places.",
        linkText: 'Learn more'
    }
]

export const secondSection = [
    {
        id: 'graphic-design',
        title: 'Graphic Design',
        text: "Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients' attention."
    },
    {
        id: 'photography',
        title: 'Photography',
        text: ' Increase your credibility by getting the most stunning, high-quality photos that improve your business image.'
    }
]

export const clientTestimonials = [
    {
        id: 'emily',
        name: 'Emily R.',
        testimony: 'We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.',
        profession: 'Marketing Director',
        profilePicture: images.profilePicture.emily
    },
    {
        id: 'thomas',
        name: 'Thomas S.',
        testimony: "Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience.",
        profession: 'Chief Operating Officer',
        profilePicture: images.profilePicture.thomas
    },
    {
        id: 'jennie',
        name: 'Jennie F.',
        testimony: 'Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!',
        profession: 'Business Owner',
        profilePicture: images.profilePicture.jennie
    }
]

export const mobileImage = {
    milk: images.mobile.milk,
    orange: images.mobile.orange,
    cone: images.mobile.cone,
    sugar: images.mobile.sugar
}

export const desktopImage = {
    milk: images.desktop.milk,
    orange: images.desktop.orange,
    cone: images.desktop.cone,
    sugar: images.desktop.sugar
}

export const footerSection = {
    logo: images.logoGreen,
    lists: lists,
    socialMedia: {
        facebook: images.facebook,
        instagram: images.instagram,
        twitter: images.twitter,
        pinterest: images.pinterest
    }
}