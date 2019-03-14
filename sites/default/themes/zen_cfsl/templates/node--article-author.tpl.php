<?php
/**
 * @file
 * Returns the HTML for a node.
 *
 * Complete documentation for this file is available online.
 * @see https://drupal.org/node/1728164
 */
?>
<article class="node-<?php print $node->nid; ?> <?php print $classes; ?> clearfix"<?php print $attributes; ?>>

  <?php
    // We hide the comments and links now so that we can render them later.
    hide($content['comments']);
    hide($content['links']);
    hide($content['field_portrait_photo']);
    hide($content['field_job_title']);
    hide($content['field_company']);

    //print render($content);
  ?>

  <?= render($content['field_portrait_photo']); ?>
  <div class="author-details">
      <?php if (!$page && $title): ?>
        <h2<?php print $title_attributes; ?>><?php print $title; ?></h2>
      <?php endif; ?>
      <?php if (!empty($content['field_job_title'])): ?>
        <?= render($content['field_job_title']); ?>
      <?php endif; ?>
      <?php if (!empty($content['field_company'])): ?>
        <?= render($content['field_company']); ?>
      <?php endif; ?>
  </div>

  <?php print render($content['links']); ?>

  <?php print render($content['comments']); ?>

</article>

<script>
  article_author_height();
</script>
