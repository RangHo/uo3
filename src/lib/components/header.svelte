<script lang="ts">
  import { base } from '$app/paths';
</script>

<header id="header" class="region">
  <h1 class="heading">
    <a href="{base}/">Utilities of Our Own</a>
  </h1>
  <nav aria-label="Site">
    <ul class="primary navigation actions">
      <li class="dropdown">
        <a href="{base}/skin" class="dropdown-toggle" data-toggle="dropdown" data-target="#">
          Skins
        </a>
        <ul class="menu dropdown-menu">
          <li><a href="{base}/skin/siteskins">Site Skins</a></li>
          <li><a href="{base}/skin/workskins">Work Skins</a></li>
        </ul>
      </li>
    </ul>
  </nav>
  <div class="clear"></div>
</header>
