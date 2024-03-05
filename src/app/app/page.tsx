/**
 * v0 by Vercel.
 * @see https://v0.dev/t/WamybeBxbip
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";

export default function Component() {
	return (
		<div className="flex flex-col h-screen w-full items-start">
			<div className="grid w-full h-full grid-cols-1 gap-4 px-4 md:grid-cols-3 md:gap-8 flex-1">
				<div className="col-span-2 h-full">
					<div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8 h-full">
						<div className="rounded-lg border dark:border-gray-800 h-full">
							<div className="h-full">
								<div className="p-4">
									<h2 className="font-semibold text-lg">A Fazer</h2>
								</div>
								<div className="h-full">
									<div className="p-4 max-w-full	">
										<Card className="mb-4" variant="muted">
											<div className="flex items-center gap-4">
												<GripHorizontalIcon className="w-4 h-4 text-gray-500 dark:text-gray-400 handle cursor-move" />
												<div className="flex-1">
													<CardTitle className="text-sm font-normal">
														Atualizar documentação
													</CardTitle>
													<CardDescription className="text-sm font-normal">
														Precisa adicionar novas capturas de tela
													</CardDescription>
												</div>
												<div className="flex gap-2 text-xs">
													<Button
														className="w-6 h-6 rounded-full border"
														size="icon"
														variant="outline"
													>
														<FileEditIcon className="w-4 h-4" />
														<span className="sr-only">Editar</span>
													</Button>
													<Button
														className="w-6 h-6 rounded-full border"
														size="icon"
														variant="outline"
													>
														<TrashIcon className="w-4 h-4" />
														<span className="sr-only">Excluir</span>
													</Button>
												</div>
											</div>
										</Card>
									</div>
									<div className="p-4">
										<Card className="mb-4" variant="muted">
											<div className="flex items-center gap-4">
												<GripHorizontalIcon className="w-4 h-4 text-gray-500 dark:text-gray-400 handle cursor-move" />
												<div className="flex-1">
													<CardTitle className="text-sm font-normal">
														Adicionar novos componentes
													</CardTitle>
													<CardDescription className="text-sm font-normal">
														Pesquisar as melhores práticas
													</CardDescription>
												</div>
												<div className="flex gap-2 text-xs">
													<Button
														className="w-6 h-6 rounded-full border"
														size="icon"
														variant="outline"
													>
														<FileEditIcon className="w-4 h-4" />
														<span className="sr-only">Editar</span>
													</Button>
													<Button
														className="w-6 h-6 rounded-full border"
														size="icon"
														variant="outline"
													>
														<TrashIcon className="w-4 h-4" />
														<span className="sr-only">Excluir</span>
													</Button>
												</div>
											</div>
										</Card>
									</div>
								</div>
							</div>
						</div>
						<div className="rounded-lg border dark:border-gray-800 h-full">
							<div className="h-full">
								<div className="p-4">
									<h2 className="font-semibold text-lg">Em Progresso</h2>
								</div>
								<div className="h-full">
									<div className="p-4">
										<Card className="mb-4" variant="muted">
											<div className="flex items-center gap-4">
												<GripHorizontalIcon className="w-4 h-4 text-gray-500 dark:text-gray-400 handle cursor-move" />
												<div className="flex-1">
													<CardTitle className="text-sm font-normal">
														Refatorar código
													</CardTitle>
													<CardDescription className="text-sm font-normal">
														Otimizar desempenho
													</CardDescription>
												</div>
												<div className="flex gap-2 text-xs">
													<Button
														className="w-6 h-6 rounded-full border"
														size="icon"
														variant="outline"
													>
														<FileEditIcon className="w-4 h-4" />
														<span className="sr-only">Editar</span>
													</Button>
													<Button
														className="w-6 h-6 rounded-full border"
														size="icon"
														variant="outline"
													>
														<TrashIcon className="w-4 h-4" />
														<span className="sr-only">Excluir</span>
													</Button>
												</div>
											</div>
										</Card>
									</div>
								</div>
							</div>
						</div>
						<div className="rounded-lg border dark:border-gray-800 h-full">
							<div className="h-full">
								<div className="p-4" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

function FileEditIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5" />
			<polyline points="14 2 14 8 20 8" />
			<path d="M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z" />
		</svg>
	);
}

function GripHorizontalIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<circle cx="12" cy="9" r="1" />
			<circle cx="19" cy="9" r="1" />
			<circle cx="5" cy="9" r="1" />
			<circle cx="12" cy="15" r="1" />
			<circle cx="19" cy="15" r="1" />
			<circle cx="5" cy="15" r="1" />
		</svg>
	);
}

function PlusIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M5 12h14" />
			<path d="M12 5v14" />
		</svg>
	);
}

function TrashIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M3 6h18" />
			<path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
			<path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
		</svg>
	);
}
