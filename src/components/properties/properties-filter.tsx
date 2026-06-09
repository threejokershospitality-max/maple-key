"use client";

import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Property, PropertyCategory } from "@/types";
import { PropertyCard } from "@/components/shared/property-card";
import { categoryLabels } from "@/data/faqs";
import { destinations } from "@/data/destinations";

interface PropertiesFilterProps {
  properties: Property[];
  initialCategory?: string;
  initialDestination?: string;
}

export function PropertiesFilter({
  properties,
  initialCategory,
  initialDestination,
}: PropertiesFilterProps) {
  const [search, setSearch] = useState("");
  const [destination, setDestination] = useState(initialDestination || "all");
  const [category, setCategory] = useState(initialCategory || "all");
  const [sort, setSort] = useState("featured");

  const filtered = useMemo(() => {
    let result = [...properties];

    if (search) {
      const q = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.city.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q)
      );
    }

    if (destination !== "all") {
      result = result.filter((p) => p.destinationSlug === destination);
    }

    if (category !== "all") {
      result = result.filter((p) =>
        p.categories.includes(category as PropertyCategory)
      );
    }

    switch (sort) {
      case "name":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "guests":
        result.sort((a, b) => b.guests - a.guests);
        break;
      case "bedrooms":
        result.sort((a, b) => b.bedrooms - a.bedrooms);
        break;
    }

    return result;
  }, [properties, search, destination, category, sort]);

  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-4 mb-10">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-charcoal/40" />
          <Input
            placeholder="Search properties..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10"
            aria-label="Search properties"
          />
        </div>

        {destinations.length > 1 && (
          <Select value={destination} onValueChange={setDestination}>
            <SelectTrigger className="w-full lg:w-48">
              <SelectValue placeholder="Destination" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Destinations</SelectItem>
              {destinations.map((d) => (
                <SelectItem key={d.slug} value={d.slug}>
                  {d.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}

        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger className="w-full lg:w-48">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {Object.entries(categoryLabels).map(([key, label]) => (
              <SelectItem key={key} value={key}>
                {label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={sort} onValueChange={setSort}>
          <SelectTrigger className="w-full lg:w-40">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="featured">Featured</SelectItem>
            <SelectItem value="name">Name</SelectItem>
            <SelectItem value="guests">Capacity</SelectItem>
            <SelectItem value="bedrooms">Bedrooms</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-charcoal/60 text-lg">
            No properties match your filters.
          </p>
          <button
            onClick={() => {
              setSearch("");
              setDestination("all");
              setCategory("all");
            }}
            className="text-forest hover:text-saffron mt-2 text-sm"
          >
            Clear all filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((property, i) => (
            <PropertyCard key={property.id} property={property} index={i} />
          ))}
        </div>
      )}
    </div>
  );
}
