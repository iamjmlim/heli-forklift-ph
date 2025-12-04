# Contributing to Heli Forklift Philippines Website

Thank you for your interest in contributing! This document provides guidelines for contributing to the project.

## Development Process

1. **Fork the repository** on GitHub
2. **Clone your fork** locally
3. **Create a branch** for your changes
4. **Make your changes** and test them
5. **Commit your changes** with clear messages
6. **Push to your fork** on GitHub
7. **Create a Pull Request**

## Coding Standards

### TypeScript

- Use TypeScript for all new files
- Define proper types and interfaces
- Avoid using `any` type
- Use functional components with hooks

### Styling

- Use Tailwind CSS classes
- Follow the existing color scheme (orange/red)
- Ensure responsive design (mobile-first)
- Test on multiple screen sizes

### Components

- Keep components small and focused
- Use ShadCN UI components when possible
- Follow the existing component structure
- Add proper TypeScript types

### Naming Conventions

- **Files**: Use kebab-case for file names (`my-component.tsx`)
- **Components**: Use PascalCase (`MyComponent`)
- **Functions**: Use camelCase (`myFunction`)
- **Constants**: Use UPPER_SNAKE_CASE (`MY_CONSTANT`)

## Commit Messages

Use clear, descriptive commit messages:

```
feat: Add new product category
fix: Correct navigation mobile menu bug
docs: Update README with deployment steps
style: Improve button hover effects
refactor: Simplify contact form validation
```

Prefixes:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

## Testing Checklist

Before submitting a PR, ensure:

- [ ] Code builds without errors (`npm run build`)
- [ ] No linter errors (`npm run lint`)
- [ ] Tested on desktop browsers (Chrome, Firefox, Safari)
- [ ] Tested on mobile devices
- [ ] All links work correctly
- [ ] Forms function properly
- [ ] Images load correctly
- [ ] No console errors

## Pull Request Process

1. Update documentation if needed
2. Add a clear description of changes
3. Reference any related issues
4. Wait for review and address feedback
5. Ensure CI/CD passes

## Questions?

If you have questions, feel free to:
- Open an issue on GitHub
- Contact the maintainers

## Code of Conduct

- Be respectful and constructive
- Welcome newcomers
- Focus on what is best for the project
- Show empathy towards others

Thank you for contributing! 🎉

