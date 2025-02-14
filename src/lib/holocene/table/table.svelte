<script lang="ts">
  import type { HTMLTableAttributes } from 'svelte/elements';

  import { twMerge as merge } from 'tailwind-merge';

  import ProgressBar from '$lib/holocene/progress-bar.svelte';

  interface $$Props extends HTMLTableAttributes {
    variant?: 'simple' | 'fancy';
    updating?: boolean;
    class?: string;
    'data-testid'?: string;
  }

  let className = '';
  export { className as class };
  export let variant: 'simple' | 'fancy' = 'fancy';
  export let updating = false;
</script>

<table class={merge(variant, className)} {...$$restProps}>
  <slot name="caption" />
  <thead>
    <slot name="headers" />
    {#if updating}
      <ProgressBar />
    {/if}
  </thead>
  <tbody>
    <slot />
  </tbody>
</table>

<style lang="postcss">
  table {
    @apply relative;

    thead :global(th) {
      @apply text-left font-secondary text-sm font-medium;
    }

    tbody :global(td) {
      @apply text-left text-sm;
    }
  }

  table.fancy {
    @apply surface-primary border-separate border-spacing-0 rounded-xl border-[3px];

    thead {
      @apply surface-inverse;

      :global(th) {
        @apply border-t  px-1 py-2;
      }

      :global(td) {
        @apply border-t  px-1 py-2;

        &:first-child {
          @apply w-[1px] rounded-tl-lg border-l;
        }

        &:last-child {
          @apply w-[1px] rounded-tr-lg border-r;
        }
      }
    }

    tbody :global {
      td {
        @apply border-t  px-1 py-2 text-sm;

        &:first-child {
          @apply border-l  px-1;
        }

        &:first-child:is(.expanded-cell) {
          @apply px-0;
        }

        &:last-child {
          @apply w-0 border-r  p-0;
        }
      }

      &:last-child {
        td {
          @apply border-b;

          &:first-child {
            @apply rounded-bl-lg;
          }

          &:last-child {
            @apply rounded-br-lg;
          }
        }
      }

      tbody :global {
        td {
          &:first-child {
            &:first-child {
              @apply rounded-bl-none;
            }
          }

          &:last-child {
            &:last-child {
              @apply rounded-br-none;
            }
          }
        }
      }
    }
  }

  table.simple {
    thead :global(th) {
      @apply border-b border-primary py-2;
    }

    tbody :global(td) {
      @apply border-b  py-2;
    }

    &:last-child {
      @apply border-b-0;
    }
  }
</style>
