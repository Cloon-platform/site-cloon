"use client";

import { useSectionEditor } from "@/hooks/use-section-editor";
import { SectionEditorLayout } from "@/components/admin/section-editor-layout";
import { PublishBar } from "@/components/admin/publish-bar";
import { RevisionHistory } from "@/components/admin/revision-history";
import { SwitchField } from "@/components/admin/fields/switch-field";
import { SelectField } from "@/components/admin/fields/select-field";
import { TextField } from "@/components/admin/fields/text-field";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { sectionMeta } from "@/lib/content/meta";
import type { ComingSoonContent } from "@/lib/content/schemas";

const COMING_SOON_TEMPLATES = [
  {
    id: "coming-soon",
    label: "Coming Soon",
    heading: "We're putting the finishing touches on things",
    message: "Our website is currently being updated. Please check back soon.",
  },
  {
    id: "maintenance",
    label: "Down for Maintenance",
    heading: "Back shortly",
    message:
      "We're carrying out scheduled maintenance. The site will be back online shortly — thanks for your patience.",
  },
  {
    id: "launching-soon",
    label: "Launching Soon",
    heading: "Something new is on the way",
    message: "We're getting ready to launch. Check back soon to see what's new.",
  },
] as const;

export function ComingSoonEditor({ initial }: { initial: ComingSoonContent }) {
  const editor = useSectionEditor("comingSoon", initial);
  const { value, setValue } = editor;
  const meta = sectionMeta.comingSoon;

  function applyTemplate(id: string) {
    const template = COMING_SOON_TEMPLATES.find((t) => t.id === id);
    if (!template) return;
    setValue({ ...value, heading: template.heading, message: template.message });
  }

  return (
    <SectionEditorLayout
      title={meta.title}
      description={meta.description}
      bar={
        <PublishBar
          sectionLabel={meta.title}
          isDirty={editor.isDirty}
          isPending={editor.isPending}
          onSave={editor.save}
          onPublish={editor.publishNow}
          onDiscard={editor.discard}
          previewHref="/admin/preview"
          historySlot={<RevisionHistory sectionKey="comingSoon" onRestore={editor.applyRestored} />}
        />
      }
    >
      <SwitchField
        id="coming-soon-enabled"
        label="Show coming soon page to visitors"
        description="When on, anyone without an admin session sees this page instead of the site. You'll still see the real site while signed in."
        checked={value.enabled}
        onCheckedChange={(enabled) => setValue({ ...value, enabled })}
      />

      <SelectField
        id="coming-soon-template"
        label="Start from a template"
        placeholder="Choose a template…"
        options={COMING_SOON_TEMPLATES.map((t) => ({ value: t.id, label: t.label }))}
        onChange={applyTemplate}
      />

      <TextField
        id="coming-soon-heading"
        label="Heading"
        value={value.heading}
        onChange={(heading) => setValue({ ...value, heading })}
        maxLength={120}
      />

      <div className="space-y-2">
        <Label htmlFor="coming-soon-message">Message</Label>
        <Textarea
          id="coming-soon-message"
          value={value.message}
          maxLength={300}
          onChange={(e) => setValue({ ...value, message: e.target.value })}
          className="min-h-28 rounded-xl bg-background"
        />
      </div>
    </SectionEditorLayout>
  );
}
