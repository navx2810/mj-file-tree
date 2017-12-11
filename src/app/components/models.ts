export interface Content {
	cTitle?: string
	cId?: number
}

export interface Tag {
	tId?: number
	tName?: string
}

export interface TagCollection {
	tag?: Tag
	children?: TagCollection[]
	content?: Content[]
}