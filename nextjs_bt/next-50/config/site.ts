export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Next.js + NextUI",
	description: "Make beautiful websites regardless of your design experience.",
	navItems: [
		{
			label: "Trang chủ",
			href: "/",
		},
    {
      label: "Giới thiệu",
      href: "/aboutUs",
    },
	{
		label: "Tính năng",
		href: "/feature",
	  },
	  {
		label: "Bảng giá",
		href: "/prices",
	  },
	  {
		label: "Liên hệ",
		href: "/contact",
	  }
	],
	navMenuItems: [
	{
		label: "Trang chủ",
		href: "/",
	},
    {
      label: "Giới thiệu",
      href: "/aboutUs",
    },
	{
	label: "Tính năng",
	href: "/feature",
	},
	{
	label: "Bảng giá",
	href: "/prices",
	},
	{
	label: "Liên hệ",
	href: "/contact",
	}
	],
	links: {
		facebook:"https://www.facebook.com/duyhieu.nguyen.311493/",
		github: "https://github.com/HieuBoss",
	},
};
