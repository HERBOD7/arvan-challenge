<script>
import InputField from "@/components/auth/InputField";
import BaseButton from "@/components/shared/BaseButton";
import TextareaField from "@/components/dashboard/TextareaField";
export default {
  name: "NewArticle",
  components: {
    InputField,
    BaseButton,
    TextareaField
  }
};
</script>

<template>
  <div class="content-container">
    <p class="fz-40">
      New Article
    </p>
    <form class="mt-27">
      <div class="d-flex">
        <div class="w-100">
          <InputField
            id="title"
            v-model="ArticleTitle"
            title="Title"
            placeholder="Title"
            required
          />

          <InputField
            id="description"
            v-model="ArticleDescription"
            class="mt-20"
            title="Description"
            placeholder="Description"
          />

          <TextareaField
            id="articleBody"
            for="articleBody"
            class="mt-25"
            title="Body"
          />
        </div>
        <div class="ml-30 tags-container">
          <InputField
            id="newTag"
            v-model="newTag"
            title="Tags"
            placeholder="New tag"
          />
          <div class="mt15 border rounded tags-item">
            <div class="form-check form-check-inline">
              <input
                id="tag1"
                class="form-check-input"
                type="checkbox"
                value="Tag1"
              />
              <label class="form-check-label" for="tag1">1</label>
            </div>
          </div>
        </div>
      </div>

      <BaseButton type="submit" class="mt-25 btn-primary" text="Submit" />
    </form>
  </div>
</template>
