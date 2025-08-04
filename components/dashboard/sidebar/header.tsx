"use client";

import { SidebarMenu, SidebarMenuItem } from "@/components/ui/sidebar";

import { Brand as BrandType } from "@/types/blocks/base";
import { DropdownMenu } from "@/components/ui/dropdown-menu";
import Link from "next/link";

export default function ({ brand }: { brand: BrandType }) {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <Link
            href={brand?.url || "javascript:void(0)"}
            className="flex items-center py-2"
          >
            <div className="flex items-center justify-center">
              <img
                src={brand?.logo?.src}
                alt={brand?.logo?.alt || brand?.title}
                className="h-8 w-auto"
              />
            </div>
          </Link>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
