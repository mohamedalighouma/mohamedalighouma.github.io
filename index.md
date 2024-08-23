---
#layout: default
title: "Mohamed Ali GHOUMA"
---

<div class="animate__animated animate__fadeInDown">
  <h1>Mohamed Ali GHOUMA</h1>
  <h2>Ingénieur DevOps Cloud SRE Senior</h2>
</div>

<div class="animate__animated animate__fadeInUp">
  <p><strong>Contact:</strong></p>
  <p>Phone: +33 0758151884</p>
  <p>Email: ghouma.mohamed.ali@gmail.com</p>
</div>

<hr />

<div class="animate__animated animate__fadeIn">
  <h3>Compétences Techniques</h3>
  <ul>
    <li><strong>CI/CD:</strong> Jenkins, CodeBuild, CodeDeploy, CodePipeline</li>
    <li><strong>Containerisation:</strong> Kubernetes, Docker, Docker Stack, Docker Swarm, Docker Compose, Helm</li>
    <li><strong>GitOps:</strong> ArgoCD, Argo Rollouts</li>
    <li><strong>IaC:</strong> Ansible, Terraform, CloudFormation, CDK</li>
    <li><strong>Bases de données:</strong> MySQL, MongoDB, Redis, PostgreSQL, Oracle, RDS, DynamoDB, SQL Server</li>
    <!-- Add the rest of your skills here -->
  </ul>

  <!-- Add your other sections here, using similar animation classes -->
</div>

<!-- Pagination links -->
{% if paginator.total_pages > 1 %}
  <div class="pagination animate__animated animate__fadeIn">
    {% if paginator.previous_page %}
      <a href="{{ paginator.previous_page_path }}" class="pagination-item older">Previous</a>
    {% endif %}
    <span class="page-number">Page {{ paginator.page }} of {{ paginator.total_pages }}</span>
    {% if paginator.next_page %}
      <a href="{{ paginator.next_page_path }}" class="pagination-item newer">Next</a>
    {% endif %}
  </div>
{% endif %}
