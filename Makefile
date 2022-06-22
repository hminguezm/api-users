config:
	@echo "Environment file generating"
	@cp .env.example .env
	@echo "Init..."
	@find . -type f -print0 | xargs -0 sed -i 's/typescript-api/$(project-name)/gI'
	@git remote remove origin
	@rm -rf .idea .git Makefile
	@echo "Done"
