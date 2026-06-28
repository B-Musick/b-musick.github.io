# Protec ERP System

I co-developed a custom Enterprise Resource Planning (ERP) system for Protec, a manufacturing company based in Winkler, Manitoba. The application was built using Laravel, Vue.js, and MySQL to streamline internal business operations, including inventory management, purchase orders, project tracking, supplier returns, and customer management.

As the application evolved, I worked closely with the client to implement new features that improved workflows, increased traceability, and simplified day-to-day operations for employees.

## Purchase Order Management

A significant portion of my work focused on enhancing the purchase order workflow. I implemented the ability to amend existing purchase orders while maintaining a complete audit trail of every modification. The system records which user made each change, when the change occurred, and exactly what information was updated, providing greater accountability and historical tracking.

I also redesigned the purchase order print layout, creating a more professional document that incorporated the company's branding, address information, and clearly formatted tables for order details.

Additionally, I developed functionality allowing users to create supplier return orders, enabling damaged or incorrect parts to be returned using a dedicated purchase order workflow that integrates with the existing purchasing system.

## Inventory & Part Management

To improve inventory management, I implemented the ability to discontinue parts without permanently removing them from the system. This involved extending the database schema, updating backend business logic, and modifying frontend interfaces to support filtering between active and discontinued parts.

By preserving historical records while preventing discontinued items from appearing in day-to-day operations, the feature improved data integrity and simplified inventory management.

## Project & Customer Management

I enhanced the project management module by implementing project archiving functionality. Users can archive completed projects and easily switch between active and archived projects using intuitive filtering controls, helping keep active workspaces organized while retaining historical project data.

I also improved the project creation workflow by allowing users to create new customer records directly while creating a project or select from existing customers. This reduced repetitive data entry and streamlined the onboarding process for new projects.

## Technical Highlights

This project provided experience developing and maintaining a production ERP system used to support real business operations. Working across the Laravel backend, Vue.js frontend, and MySQL database, I implemented features spanning database design, backend business logic, user interface development, reporting, and workflow automation.

The project strengthened my experience building scalable business applications while collaborating closely with clients to translate operational requirements into practical software solutions that improved efficiency and usability.
